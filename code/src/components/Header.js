import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */
  box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  margin-bottom: 0.8rem;
  color: white;
  height: 100px;
`;

export const Header = () => {
  return <StyledHeader>Test</StyledHeader>;
};
