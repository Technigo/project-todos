import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex; 
flex-direction:column;
height: 200px;
`
const StyledTitle = styled.h1`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 72px;
text-align:center;
color:#1261BC;
`
export const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle> Get it done! </StyledTitle>
    </StyledHeader>
  )
}