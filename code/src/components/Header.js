import React from 'react';
import { MainSections, MainHeader } from '../styles/mainStyles';

const Header = () => {
  return (
    <MainSections coloredBackground>
      <MainHeader>My ToDo:s</MainHeader>
      {/* Time added here */}
    </MainSections>
  )
}

export default Header;