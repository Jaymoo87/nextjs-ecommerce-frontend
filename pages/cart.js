import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from '@/components/Header';
import Center from '@/components/Center';
import MainBtn from '@/components/MainBtn';

import { darkBG, primary } from '@/lib/colors';
import { CartContext } from '@/components/CartContext';
import axios from 'axios';
import Table from '@/components/Table';

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: ${primary};
  border-radius: 10px;
  padding: 30px;
  box-shadow: ${darkBG} 5px 5px 200px;
`;

const CartPage = () => {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((res) => setProducts(res.data));
    }
  }, []);

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
                      <td>{p.title}</td>
                      <td>{cartProducts.filter((id) => id === p._id).length}</td>
                      <td>{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Box>
          <Box>
            <h2>Buy it</h2>
            <input type="text" placeholder="address" />
            <input type="text" placeholder="address2" />
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
