import { darkBG, darkText, lightBG, mainBtnBg } from '@/lib/colors';
import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  background-color: ${mainBtnBg};
  border: 0;
  border-radius: 15px;
  margin: 5px;
  padding: 5px 15px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  box-shadow: ${darkBG} 2px 2px 10px;

  svg {
    margin-right: 5px;
    height: 16px;
  }

  ${(props) =>
    props.cyan &&
    css`
      background-color: ${lightBG};
      color: ${darkText};
    `}

  ${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      box-shadow: ${lightBG} 1px 1px 70px;
    `}

    ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: 0.8rem;
      margin: 0 15px 0 15px;
      border-radius: 40px 5px 25px 5px;
    `}
    svg {
    height: 20px;
  }
`;

export const SButton = styled.button`
  ${ButtonStyle}
`;

const MainBtn = ({ children, ...rest }) => {
  return <SButton {...rest}>{children}</SButton>;
};

export default MainBtn;
