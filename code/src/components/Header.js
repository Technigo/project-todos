import React from 'react'

import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        src={'/assets/laptop-closing3.gif'}>
      </Logo>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex; 
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
  z-index: 2;
`;

export default Header

