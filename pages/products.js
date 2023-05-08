import React from 'react';

import styled from 'styled-components';

import Header from '@/components/Header';
import Center from '@/components/Center';
import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import ProductsGrid from '@/components/ProductsGrid';

const Title = styled.h1`
  font-size: 1.5em;
`;

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
  console.log({ products });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default ProductsPage;
