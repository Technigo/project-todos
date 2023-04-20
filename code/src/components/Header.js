import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.h1`
text-align: center;
z-index: 2;
font-size: 100px;
font-family: Montserrat Alternates;
font-weight: 700;
margin-bottom: -35px;
opacity: 60%;
`

const Header = () => {
  return (
    <StyledHeader>to do list</StyledHeader>
  )
}

export default Header;