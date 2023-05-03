import React from 'react';

import styled from 'styled-components';

import Center from './Center';
import ProductBox from './ProductBox';
import { MontFont, primary } from '@/lib/colors';

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${primary};
  margin: 30px 0 20px 25px;
`;

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Title>Latest Additions</Title>
      <ProductsGrid>{products?.length > 0 && products.map((p) => <ProductBox {...p} />)}</ProductsGrid>
    </Center>
  );
};

export default NewProducts;
