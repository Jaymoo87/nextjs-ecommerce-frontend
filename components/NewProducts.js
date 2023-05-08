import React from 'react';

import styled from 'styled-components';

import Center from './Center';
import ProductsGrid from './ProductsGrid';
import { primary } from '@/lib/colors';

const Title = styled.h2`
  font-size: 2rem;
  color: ${primary};
  margin: 30px 0 20px 25px;
`;

const NewProducts = ({ products }) => {
  return (
    <Center>
      <Title>Latest Additions</Title>
      <ProductsGrid products={products} />
    </Center>
  );
};

export default NewProducts;
