import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const ls = typeof window !== 'undefined' ? window.localStorage : null;
  const defaultProducts = ls ? JSON.parse(ls.getItem('cart')) : [];

  const [cartProducts, setCartProducts] = useState(defaultProducts || []);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };

  return <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
