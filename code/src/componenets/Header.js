/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
/* import Progressbar from 'components/ProgressBar' */

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Agenda for <span>{moment().format('MMM Do YYYY')}</span></h1>
      <h1> Let´s get started!</h1>
      <h3> Here is the progressbar</h3>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 50%;;
  height: 20vh;
  min-height: 150px;
  padding-top: 3rem;
  background-color: yellow;
  border: 10px solid black;
  text-align: center;
  font-size: 0.8rem;
  `