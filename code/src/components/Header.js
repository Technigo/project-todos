import React from 'react';
import moment from 'moment';
import styled from 'styled-components/macro';
import Clock from './Clock';
import { MainSections, MainHeader, MainText, Devices } from '../styles/mainStyles';

const Header = () => {
  return (
    <HeaderSection coloredBackground>
      <MainHeader>My ToDo:s</MainHeader>
      <HeaderText>{moment().format('dddd MMM Do YYYY')}</HeaderText>
      <HeaderText><Clock /></HeaderText>
    </HeaderSection>
  )
}

export default Header;

const HeaderSection = styled(MainSections)`
  @media ${Devices.tablet} {
    padding: 2% 0% 2% 0%;
  } 
`

const HeaderText = styled(MainText)`
  @media ${Devices.tablet} {
    padding: 0% 0% 0.5% 0%;
  }
`