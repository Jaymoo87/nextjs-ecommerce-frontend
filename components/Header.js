import React, { useContext, useState } from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { lightBG, primary, darkBG } from '@/lib/colors';

import Center from './Center';
import NavIcon from './icons/NavIcon';
import { CartContext } from './CartContext';

const SHeader = styled.header`
  background-color: ${lightBG};
`;

const Logo = styled(Link)`
  color: ${primary};
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const SLink = styled(Link)`
  display: block;
  color: ${primary};
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const SNav = styled.nav`
  ${(props) => (props.navActive ? 'display: block;' : 'display: none;')}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: ${darkBG};

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    background-color: ${lightBG};
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 30px;
  height: 30px;
  color: ${primary};
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const { cartProducts } = useContext(CartContext);

  return (
    <SHeader>
      <Center>
        <SWrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <SNav navActive={navActive}>
            <SLink href={'/'}>Home</SLink>
            <SLink href={'/products'}>All Products</SLink>
            <SLink href={'/categories'}>Categories</SLink>
            <SLink href={'/account'}>Account</SLink>
            <SLink href={'/cart'}>My Cart ({cartProducts.length})</SLink>
          </SNav>
          <NavButton onClick={() => setNavActive((prev) => !prev)}>
            <NavIcon />
          </NavButton>
        </SWrapper>
      </Center>
    </SHeader>
  );
};

export default Header;
