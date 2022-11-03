import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { Section } from 'styles/SectionWrapper';

import Swoop from '../assets/modified-swoop-orange.png'

const Header = () => {
  return (
    <Section>
      <BackgroundImg src={Swoop} />
      <WeekDay>{moment().format('dddd')} </WeekDay>
    </Section>
  )
}
export default Header;

const BackgroundImg = styled.img`
background-size: cover;
width: 100%;
`
const WeekDay = styled.p`
position: absolute;
z-index: 1;
top: 3%;
left: 10%;
font-size: 3rem;
color: white;
`