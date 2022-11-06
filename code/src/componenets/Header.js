/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
/* import Progressbar from 'components/ProgressBar' */

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Agenda for <span>{moment().format('MMM Do YYYY')}</span></h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 20vh;
  min-height: 150px;
  padding-top: 3rem;
  background-color: yellow;
  border: 10px solid black;
  text-align: center;
  font-size: 0.8rem;
  `