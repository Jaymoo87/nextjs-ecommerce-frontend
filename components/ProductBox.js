import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import MainBtn from './MainBtn';
import CartIcon from './icons/CartIcon';

import { primary, darkBG } from '@/lib/colors';
import { CartContext } from './CartContext';

const ProductWrapper = styled.div`
  background-color: white;
`;

const Box = styled(Link)`
  box-shadow: ${darkBG} 5px 5px 15px;
  background-color: white;
  padding: 20px;
  height: 120px;
  text-align: center;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 100px;
    border-radius: 5px;
  }
`;

const Title = styled(Link)`
  display: flex;
  justify-content: center;
  color: ${primary};
  font-weight: light;
  font-size: 0.8rem;
  margin-bottom: 5px;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  color: ${primary};
  margin-top: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 100px;
  margin-left: 20px;
  font-weight: 500;
`;

const ProductBox = ({ _id, description, price, title, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = `/products/${_id}`;

  return (
    <ProductWrapper>
      <Title href={url}> {title}</Title>
      <Box href={url}>
        <img src={images[0]} alt="" />
      </Box>{' '}
      <ProductInfoBox>
        ${price}{' '}
        <MainBtn onClick={() => addProduct(_id)} size={'sm'}>
          <CartIcon /> Buy Now
        </MainBtn>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
