import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import { Section } from 'styles/SectionWrapper';
import Counter from './Counter';

import Swoop from '../assets/modified-swoop-orange.png'

const Header = () => {
  return (
    <Section>
      <BackgroundImg src={Swoop} />
      <WeekDay>{moment().format('dddd')}. </WeekDay>
      <Counter />
    </Section>
  )
}
export default Header;

const BackgroundImg = styled.img`
width: 100%;
`
const WeekDay = styled.p`
font-family: 'Yeseva One', cursive;
position: relative;
right: 92%;
z-index: 1;
top: 80px;
font-size: 3rem;
color: white;
`