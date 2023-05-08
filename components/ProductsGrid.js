import React from 'react';

import styled from 'styled-components';

import ProductBox from '@/components/ProductBox';

const SProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;
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
