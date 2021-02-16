import React from 'react';
import moment from 'moment';

import { HeaderContainer, Date, Logo } from '../styles/headerStyles';
import { Summary } from './Summary';

export const Header = () => {
  return (
    <HeaderContainer>
      <Date>{moment().format('L')}</Date>
      <Logo>Todo</Logo>
      <Summary />
    </HeaderContainer>
  )
};
