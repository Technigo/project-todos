import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 30px;
  color: white;
  text-align: center;
  background-color: rgba(237, 202, 127, 0.4);

  @media (min-width: 1025px) { 
  font-style: italic;
  font-size: 40px;
  color: black;
  background-color: rgba(237, 202, 127, 0.2);
  }
`
const Header = () => {
  return (
    <HeaderTitle>Your very own to do-list</HeaderTitle>
  )
}

export default Header;