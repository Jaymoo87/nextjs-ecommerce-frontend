import React, { useContext } from 'react';

import Center from './Center';
import styled from 'styled-components';
import MainBtn from './MainBtn';
import LinkButton from './LinkButton';

import { primary, darkBG, lightBG } from '@/lib/colors';
import { CartContext } from './CartContext';

const BG = styled.div`
  background-color: ${darkBG};
  color: ${primary};
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
`;

const DescP = styled.p`
  color: ${primary};
  font-size: 0.8rem;
  margin-bottom: 40px;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;

  img {
    max-width: 100%;
    border-radius: 2rem;
    box-shadow: ${lightBG} 5px 10px 100px;
  }
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Featured = ({ product }) => {
  const { setCartProducts } = useContext(CartContext);
  const addFeaturedToCart = () => {
    setCartProducts((prev) => [...prev, product._id]);
  };

  return (
    <BG>
      <Center>
        <ColWrapper>
          <Col>
            <div>
              <Title>{product.title}</Title>
              <DescP>{product.description}</DescP>
              <MainBtn onClick={addFeaturedToCart} size={'l'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Add To Cart
              </MainBtn>

              <LinkButton href={`/products/${product._id}`} cyan={1}>
                Read More...
              </LinkButton>
            </div>
          </Col>
          <Col>
            <img src="https://jaymoo-next-ecommerce.s3.amazonaws.com/1682607523899.jpg" alt="Galaxy S23" />
          </Col>
        </ColWrapper>
      </Center>
    </BG>
  );
};

export default Featured;
