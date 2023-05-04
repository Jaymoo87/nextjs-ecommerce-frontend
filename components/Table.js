import { darkText } from '@/lib/colors';
import React from 'react';
import styled from 'styled-components';

const STable = styled.table`
  width: 100%;

  th {
    text-align: left;
    text-transform: uppercase;
    color: ${darkText};
  }
`;

const Table = (props) => {
  return <STable {...props} />;
};

export default Table;
