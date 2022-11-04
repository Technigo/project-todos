import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyling>
      <HeaderHeading>Stuff to do:</HeaderHeading>
    </HeaderStyling>
  )
}

const HeaderStyling = styled.header`
width: 50%;
display:flex;
@media (min-width: 668px) and (max-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
`
const HeaderHeading = styled.h1`
font-family: 'Rochester', cursive;
color: #DF7861;
font-size: 33px;
padding-bottom: 10px;

@media (min-width: 668px) and (max-width: 1024px) {
  font-size: 37px;
  }
  @media (min-width: 1025px) {
    font-size: 40px;
  }
`
export default Header;