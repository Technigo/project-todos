import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.h1`
text-align: center;
z-index: 2;
font-size: 60px;
font-family: Montserrat Alternates;
font-weight: 700;
margin-bottom: -20px;
opacity: 72%;

@media (min-width: 1024px) {
  font-size: 100px;
  font-weight: 700;
}
`

const Header = () => {
  return (
    <StyledHeader>to do list</StyledHeader>
  )
}

export default Header;