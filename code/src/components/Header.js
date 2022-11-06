import React from 'react'

import styled from 'styled-components/macro'
import { HeaderContainer } from 'GlobalStyle'

import Binder from '../assets/rings.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <BinderImg src={Binder} alt="binder rings" />
      <h1>Things to do today!</h1>
    </HeaderContainer>
  )
}

const BinderImg = styled.img`
  position: absolute;
  top: -1.2rem;
  width: 350px;

  @media (min-width: 667px) {
    top: -1.6rem;
    width: 500px; 
  }
`;