import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

export default async function handle(req, res) {
  await MongooseConnect();
  const ids = req.body.ids;

  res.json(await Product.find({ _id: ids }));
}
