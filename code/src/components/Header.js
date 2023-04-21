import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.div`
font-size: 25px;
height: 100px;
background: pink;
margin-bottom: 20px;
`

export const Header = () => {
  return (
    <HeaderText>
      <h1>Back & forth list</h1>
    </HeaderText>
  )
}

export default Header;