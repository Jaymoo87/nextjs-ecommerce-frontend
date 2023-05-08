import { MongooseConnect } from '@/lib/mongoose';
import { Order } from '@/models/Order';
import { buffer } from 'micro';

import Stripe from 'stripe';

const endpointSecret = 'whsec_83b29c27d6bab862dc218ba2cf47857667fe9d9142bebc7d4f6322a7761d5b00';

export default async function handler(req, res) {
  await MongooseConnect();
  const stripe = Stripe();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, { paid: true });
      }
      console.log(data);
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).json({ message: 'ok' });
}
export const config = {
  api: { bodyParser: false },
};
