import React from 'react';

import styled from 'styled-components';

import ProductBox from '@/components/ProductBox';

const SProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ProductsGrid = ({ products }) => {
  return (
    <SProductsGrid>
      {' '}
      {products?.length > 0 && products.map((p) => <ProductBox key={`product-${p._id}`} {...p} />)}
    </SProductsGrid>
  );
};

export default ProductsGrid;
