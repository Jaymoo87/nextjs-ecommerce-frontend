import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

import { ButtonStyle } from './MainBtn';

const SLink = styled(Link)`
  ${ButtonStyle}
`;

export const LinkButton = (props) => {
  return <SLink {...props} />;
};

export default LinkButton;
