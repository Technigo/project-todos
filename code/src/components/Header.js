import React from 'react';
import moment from 'moment';
import { MainSections, MainHeader, MainText } from '../styles/mainStyles';

const Header = () => {
  return (
    <MainSections coloredBackground>
      <MainHeader>My ToDo:s</MainHeader>
      <MainText>{moment().format('LLLL')}</MainText>
    </MainSections>
  )
}

export default Header;