import React from 'react';
import { HeaderText, HeaderWrapper, HeaderDate } from 'styles/Header';
import moment from 'moment';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderText>TO DO</HeaderText>
      <HeaderDate>{moment().format('dddd DD MMMM HH:MM')}</HeaderDate>
    </HeaderWrapper>
  )
}

export default Header;