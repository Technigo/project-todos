import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex; 
flex-direction:column;
`
const StyledTitle = styled.h1`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 72px;
text-align:center;
color:#1261BC;

@media (min-width:1024px) {
  font-size: 90px;
}

@media (max-width: 667px) {
  font-size: 72px; 
  margin: 20px; 
}
`
export const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle> Get it done! </StyledTitle>
    </StyledHeader>
  )
}