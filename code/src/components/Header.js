import React from 'react';

import { HeaderContainer, Date, Logo } from '../styles/headerStyles';
import { Summary } from './Summary';

export const Header = () => {
  return (
    <HeaderContainer>
      <Date>25/11/2020</Date>
      <Logo>ToDo</Logo>
      <Summary />
    </HeaderContainer>
  )
}