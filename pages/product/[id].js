import React from 'react';

import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

import styled from 'styled-components';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Center from '@/components/Center';

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
`;

const ProductPage = ({ product }) => {
  return (
    <>
      <Header />
      <Center>
        <ColWrapper></ColWrapper>
        <Title>{product.title}</Title>
      </Center>
    </>
  );
};

export const getServerSideProps = async (context) => {
  await MongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
};

export default ProductPage;
