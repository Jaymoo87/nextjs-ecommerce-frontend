import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import MainBtn from './MainBtn';
import CartIcon from './icons/CartIcon';

import { primary, darkBG, lightBG } from '@/lib/colors';
import { CartContext } from './CartContext';

const ProductWrapper = styled.div`
  box-shadow: ${darkBG} 0px 10px 30px;
  background-color: ${darkBG};
  padding: 15px;
  border-radius: 20px;
`;

const Box = styled(Link)`
  box-shadow: ${lightBG} 2px 3px 3px;
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
  font-weight: bold;
  font-size: 0.7rem;
  margin-bottom: 5px;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  background-color: ${darkBG};
  color: ${primary};
  margin-top: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100px;

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
