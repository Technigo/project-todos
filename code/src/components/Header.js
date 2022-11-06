import React from 'react'

import { HeaderContainer } from 'GlobalStyle'

import Binder from '../assets/rings.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <img className="binder" src={Binder} alt="binder rings" />
      <h1>Things to do today!</h1>
    </HeaderContainer>
  )
}
