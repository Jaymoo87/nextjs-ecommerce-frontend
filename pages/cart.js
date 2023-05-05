import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from '@/components/Header';
import Center from '@/components/Center';
import MainBtn from '@/components/MainBtn';

import { darkBG, primary } from '@/lib/colors';
import { CartContext } from '@/components/CartContext';
import axios from 'axios';
import Table from '@/components/Table';
import Input from '@/components/Input';

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: ${darkBG};
  color: ${primary};
  border-radius: 10px;
  padding: 30px;
  box-shadow: ${darkBG} 5px 5px 100px;
`;

const SingleProductInfo = styled.td`
  padding: 10px 0;
`;

const ProductImgBox = styled.div`
  background-color: white;
  margin-top: 10px;
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90px;
    max-height: 90px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const CartPage = () => {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((res) => setProducts(res.data));
    }
  }, []);

  const moreOfThisProduct = (id) => {
    addProduct(id);
  };

  const lessOfThisProduct = (id) => {
    removeProduct(id);
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <div>
      <Header />
      <Center>
        <ColWrapper>
          <Box>
            {' '}
            <h2>Cart</h2>
            {!cartProducts?.length && <div>your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr>
                      <SingleProductInfo>
                        {p.title}
                        <ProductImgBox>
                          <img src={p.images[0]} alt="" />
                        </ProductImgBox>
                      </SingleProductInfo>
                      <td>
                        <MainBtn onClick={() => moreOfThisProduct(p._id)}>+</MainBtn>
                        <QuantityLabel>{cartProducts.filter((id) => id === p._id).length}</QuantityLabel>
                        <MainBtn onClick={() => lessOfThisProduct(p._id)}>-</MainBtn>
                      </td>
                      <td>${cartProducts.filter((id) => id === p._id).length * p.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          <Box>
            <h2>Buy it</h2>
            <Input type="text" placeholder="address" />
            <Input type="text" placeholder="address2" />
            <MainBtn block size={'sm'}>
              Continue to Payment
            </MainBtn>
          </Box>
        </ColWrapper>
      </Center>
    </div>
  );
};

export default CartPage;
