/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import Counter from './Progressbar';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Agenda for <span>{moment().format('MMM Do YYYY')}</span></h1>
      <h1> HIT IT</h1>
      <Counter />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
position: absolute;
top: 10%;
right: 20%;
  width: 50%;
  height: 20vh;
  min-height: 150px;
  min-width: 25vh;
  padding: 1.8rem;
  background-color: yellow;
  border: 6px solid black;
  text-align: center;
  font-size: 0.8rem;
  `