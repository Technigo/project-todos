import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyling>
      <div>Header</div>
    </HeaderStyling>)
}

export default Header;

const HeaderStyling = styled.div`
border: 1px solid black;
height: 30vh;
font-size: 48px;
color: white;
display: flex;
justify-content: center;
align-items: center;
background-color: #EF9037;

`

