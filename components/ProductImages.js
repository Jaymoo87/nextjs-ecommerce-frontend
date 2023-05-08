import React, { useState } from 'react';

import styled from 'styled-components';

import { darkBG, darkText } from '@/lib/colors';
import { set } from 'mongoose';

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageButtons = styled.div`
  display: flex;

  gap: 10px;
  flex-grow: 0;
`;

const ImageButton = styled.div`
  ${(props) => (props.active ? `border-color: ${darkText}` : `border-color: transparent`)}
  border: 1px solid ${darkBG};
  height: 40px;
  padding: 2px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 2px 2px 5px;
  transition: all 0.9s;
  :hover {
    height: 80px;
    width: 120px;
    box-shadow: 5px 5px 10px;
  }
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} alt="" />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((i) => (
          <ImageButton key={`image-${i}`} active={i === activeImage} onClick={() => setActiveImage(i)}>
            <Image src={i} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
};

export default ProductImages;
