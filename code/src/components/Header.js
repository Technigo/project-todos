import React from 'react';
import moment from 'moment';
import Clock from './Clock';
import { MainSections, MainHeader, MainText } from '../styles/mainStyles';

const Header = () => {
  return (
    <MainSections coloredBackground>
      <MainHeader>My ToDo:s</MainHeader>
      <MainText>{moment().format('dddd MMM Do YYYY')}</MainText>
      <MainText><Clock /></MainText>
    </MainSections>
  )
}

export default Header;