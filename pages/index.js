import React from 'react';

import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

import Header from '@/components/Header';
import Featured from '@/components/Featured';
import NewProducts from '@/components/NewProducts';

const Home = ({ product }) => {
  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts />
    </div>
  );
};

export const getServerSideProps = async () => {
  await MongooseConnect();

  const featuredProductId = '644a8dff10d9908e1cb6183d';
  const product = await Product.findById(featuredProductId);

  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  };
};

export default Home;
