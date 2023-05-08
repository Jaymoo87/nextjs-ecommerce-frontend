import React from 'react';

import styled from 'styled-components';

import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

import Header from '@/components/Header';
import Center from '@/components/Center';
import ProductsGrid from '@/components/ProductsGrid';
import Title from '@/components/Title';

const ProductsPage = ({ products }) => {
  return (
    <>
      <Header />
      <Center>
        <Title>Products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
};

export const getServerSideProps = async () => {
  await MongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default ProductsPage;
