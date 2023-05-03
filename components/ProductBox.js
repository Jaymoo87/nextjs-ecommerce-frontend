import React from 'react';
import styled from 'styled-components';
import MainBtn from './MainBtn';
import CartIcon from './icons/CartIcon';

const ProductWrapper = styled.div``;

const Box = styled.div`
  box-shadow: #001524 5px 5px 15px;
  background-color: #ffecd1;
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

const Title = styled.h2`
  text-align: center;
  color: #ffecd1;
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0 0 5px 0;
`;

const ProductInfoBox = styled.div`
  color: #ffecd1;
  margin-top: 10px;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 100px;
  margin-left: 20px;
`;

const ProductBox = ({ _id, description, price, title, images }) => {
  return (
    <ProductWrapper>
      <Title> {title}</Title>
      <Box>
        <img src={images[0]} alt="" />
      </Box>{' '}
      <ProductInfoBox>
        ${price}{' '}
        <MainBtn>
          <CartIcon /> Buy Now
        </MainBtn>
      </ProductInfoBox>
    </ProductWrapper>
  );
};

export default ProductBox;
