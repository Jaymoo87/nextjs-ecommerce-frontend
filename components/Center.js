import React from 'react';

import styled from 'styled-components';

const SDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Center = ({ children }) => {
  return <SDiv>{children}</SDiv>;
};

export default Center;
