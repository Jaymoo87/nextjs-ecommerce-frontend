import React from 'react';
import styled, { css } from 'styled-components';

export const ButtonStyle = css`
  background-color: #ff7d00;
  border: 0;
  border-radius: 5px;
  margin: 5px;
  padding: 5px 15px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  svg {
    margin-right: 5px;
    height: 16px;
  }

  ${(props) =>
    props.cyan &&
    css`
      background-color: #15616d;
      color: #001524;
    `}

  ${(props) =>
    props.size === 'l' &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
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
