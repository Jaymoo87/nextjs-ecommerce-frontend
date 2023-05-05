import { lightBG, mutedText } from '@/lib/colors';
import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: ${mutedText};
  border-radius: 40px 5px 25px 5px;
  box-sizing: border-box;
  :hover {
    border: 2px solid ${lightBG};
  }
  :focus {
    box-shadow: ${lightBG} 2px 2px 5px;
    outline-width: 0px;
    border: 2px solid ${lightBG};
  }
`;

const Input = (props) => {
  return <SInput {...props} />;
};

export default Input;
