import { MongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';

export default async function handler(req, res) {
  await MongooseConnect();

  if (req.method !== 'POST') {
    res.json('Wrong API Request');
    return;
  }
  const { name, email, city, postalCode, streetAddress, country, products } = req.body;

  const productIds = products.split(',');
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
          unit_amount: quantity * info.price,
        },
      });
    }
  }

  const OrderInfo = Order.create({
    line_items,
    name,
    email,
    city,
    streetAddress,
    postalCode,
    country,
    paid: false,
  });

  res.json(OrderInfo);
}
