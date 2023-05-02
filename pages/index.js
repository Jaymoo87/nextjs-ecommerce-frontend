import React from 'react';

import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

import Header from '@/components/Header';
import Featured from '@/components/Featured';
import NewProducts from '@/components/NewProducts';

const Home = ({ featuredProduct, newProduct }) => {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} newProduct={newProduct} />
      <NewProducts />
    </div>
  );
};

export const getServerSideProps = async () => {
  await MongooseConnect();

  const featuredProductId = '644a8dff10d9908e1cb6183d';
  const featuredProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find({}, null, { sort: { _id: -1 }, limit: 10 });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
};

export default Home;
