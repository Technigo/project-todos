import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderTop>
      <HeaderStyling>A To-Do List to Organize your Life</HeaderStyling>
    </HeaderTop>
  )
}

export default Header

const HeaderTop = styled.header`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #409A98;
`

const HeaderStyling = styled.h1`
    font-family: cursive;
    font-size: 35px;
    color: black;

@media (max-width: 668px) {
    font-size: 25px;
}
`