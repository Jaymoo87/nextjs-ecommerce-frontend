import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';

import Header from '@/components/Header';
import Center from '@/components/Center';
import MainBtn from '@/components/MainBtn';

import { primary } from '@/lib/colors';
import { CartContext } from '@/components/CartContext';
import axios from 'axios';

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
            {!cartProducts?.length && <div>your cart is empty</div>}

            {products?.length > 0 && (
              <>
                <h2>Cart</h2>
                {products.map((p) => (
                  <div>
                    {p.title}: {p.price}
                  </div>
                ))}
              </>
            )}
          </Box>
          <Box>
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
