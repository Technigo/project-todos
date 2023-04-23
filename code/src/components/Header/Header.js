import React from 'react';
import HeaderImage from 'images/rainbow-dash.png';
import { HeaderContainer,
  HeaderTitle } from './Header.style';
// export const Header = () => {
//   <Header src={header} alt="header" />
// }

export const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={HeaderImage}
        alt="A colorful pony with a happy face - used in a to-do-app"
        resizeMode="contain"
        style={{ width: 150 }} />
      <HeaderTitle>Let&apos;s Do It!</HeaderTitle>
    </HeaderContainer>
  )
}