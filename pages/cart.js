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
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
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
  padding: 2px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90px;
    max-height: 90px;
  }

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

const QuantityLabel = styled.span`
  display: block;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 3px;
  }
`;

const CartPage = () => {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((res) => setProducts(res.data));
    } else {
      if (cartProducts === 0) {
        setProducts([]);
      }
    }
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      clearCart();
      setIsSuccess(true);
    }
  }, []);

  const moreOfThisProduct = (id) => {
    addProduct(id);
  };

  const lessOfThisProduct = (id) => {
    removeProduct(id);
  };

  const submitPayment = async () => {
    const res = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (res.data.url) {
      window.location = res.data.url;
    }
  };

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColWrapper>
            <Box>
              <h1>Payment Successfull!</h1>
              <p>You will recieve an email with more details about your order</p>
            </Box>
          </ColWrapper>
        </Center>
      </>
    );
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
                    <tr key={`product-${p._id}`}>
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
                      <td>${(cartProducts.filter((id) => id === p._id).length * p.price).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          <Box>
            <h2>Buy it</h2>

            <Input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CityHolder>
              <Input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </CityHolder>
            <Input
              type="text"
              placeholder="Street Address"
              name="streeAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input type="hidden" name="products" value={cartProducts.join(',')} />
            <MainBtn size={'sm'} onClick={submitPayment}>
              Continue to Payment
            </MainBtn>
          </Box>
        </ColWrapper>
      </Center>
    </div>
  );
};

export default CartPage;
