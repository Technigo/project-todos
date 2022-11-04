import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { MainSections, MainHeader, MainText } from '../styles/mainStyles';

const Header = () => {
  const time = moment().format('LLLL');
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(time);
    }, 60 * 1000);
  });

  return (
    <MainSections coloredBackground>
      <MainHeader>My ToDo:s</MainHeader>
      <MainText>{currentTime}</MainText>
    </MainSections>
  )
}

export default Header;