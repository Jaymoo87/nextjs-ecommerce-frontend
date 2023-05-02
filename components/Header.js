import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

import Center from './Center';

const SHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const SWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const SLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
`;

const SNav = styled.nav`
  display: flex;
  gap: 10px;
`;

const Header = () => {
  return (
    <SHeader>
      <Center>
        <SWrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <SNav>
            <SLink href={'/'}>Home</SLink>
            <SLink href={'/products'}>All Products</SLink>
            <SLink href={'/categories'}>Categories</SLink>
            <SLink href={'/account'}>Account</SLink>
            <SLink href={'/cart'}>My Cart (0)</SLink>
          </SNav>
        </SWrapper>
      </Center>
    </SHeader>
  );
};

export default Header;
