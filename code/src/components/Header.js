import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.div`
font-size: 30px;
height: 70px;
background: pink;
`

export const Header = () => {
  return (
    <HeaderText>
            Back and forth list
    </HeaderText>
  )
}

export default Header;