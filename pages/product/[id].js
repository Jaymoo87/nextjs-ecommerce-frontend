import React, { useContext } from 'react';

import { MongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';

import styled from 'styled-components';
import Header from '@/components/Header';
import Title from '@/components/Title';
import Center from '@/components/Center';
import Box from '@/components/Box';
import ProductImages from '@/components/ProductImages';
import MainBtn from '@/components/MainBtn';
import CartIcon from '@/components/icons/CartIcon';
import { darkText, primary } from '@/lib/colors';
import { CartContext } from '@/components/CartContext';

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px;
  font-size: large;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }

  p {
    color: ${darkText};
  }
`;

const PriceRow = styled.div`
  color: ${primary};
  gap: 20px;
  display: flex;
  align-items: center;
`;

const ProductPage = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <Box>
            <ProductImages images={product.images} />
          </Box>
          <div>
            <Title style={{ color: `${primary}` }}>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <MainBtn onClick={() => addProduct(product._id)} size={'sm'}>
                  <CartIcon /> Add to Cart
                </MainBtn>
              </div>
              <div>${product.price}</div>
            </PriceRow>
          </div>
        </ColWrapper>
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
