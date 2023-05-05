import { MongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';
import Stripe from 'stripe';

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SK);
  await MongooseConnect();

  if (req.method !== 'POST') {
    res.json('Wrong API Request');
    return;
  }
  const { name, email, city, postalCode, streetAddress, country, cartProducts } = req.body;

  const productIds = cartProducts;
  const uniqueIds = [...new Set(productIds)];
  const productsInfo = await Product.find({ _id: uniqueIds });

  let line_items = [];

  for (const id of uniqueIds) {
    const info = productsInfo.find((p) => p._id.toString() === id);
    const quantity = productIds.filter((pid) => pid === id)?.length || 0;
    if (quantity > 0 && info) {
      line_items.push({
        quantity,
        price_data: {
          currency: 'USD',
          product_data: { name: info.title },
          unit_amount: quantity * info.price * 100,
        },
      });
    }
  }

  const OrderInfo = await Order.create({
    line_items,
    name,
    email,
    city,
    streetAddress,
    postalCode,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    customer_email: email,
    success_url: process.env.PUBLIC_URL + '/cart?success=1',
    cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
    metadata: { orderId: OrderInfo?._id.toString(), test: 'ok' },
  });

  res.json({
    url: session.url,
  });
}
