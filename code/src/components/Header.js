import React from 'react';
import { HeaderText, HeaderWrapper, HeaderDate, Line } from 'styles/Header';
import { Section } from 'styles/Global'
import moment from 'moment';
import Counter from './Counter';

const Header = () => {
  return (
    <Section>
      <HeaderWrapper>
        <HeaderText>TO DO</HeaderText>
        <HeaderDate>{moment().format('dddd DD MMMM HH:mm')}</HeaderDate>
        <Counter />
        <Line />
      </HeaderWrapper>
    </Section>
  )
}

export default Header;