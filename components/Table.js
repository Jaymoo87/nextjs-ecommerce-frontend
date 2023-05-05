import { lightBG, mutedText, primary } from '@/lib/colors';
import React from 'react';
import styled from 'styled-components';

const STable = styled.table`
  width: 100%;

  th {
    text-align: left;
    text-transform: uppercase;
    color: ${mutedText};
    font-weight: 600;
    font-size: 0.75rem;
  }
  td {
    border-top: 1px solid ${lightBG};
  }
`;

const Table = (props) => {
  return <STable {...props} />;
};

export default Table;
