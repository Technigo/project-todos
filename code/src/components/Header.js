import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import header1 from 'assets/header2.jpg';
import Weather from './Weather';

const Header = () => {
  return (
    <HeaderStyling>
      <div><p>{moment().format('MMMM Do YYYY,  h:mm a')}</p></div>
      <Weather />
    </HeaderStyling>)
}

export default Header;

const HeaderStyling = styled.div`
height: 30vh;
width: 100%;
font-size: 48px;
color: white;
display: flex;
justify-content: flex-end;
align-items: flex-end;
background-color: transparent;
/* background-image: url(${header1}); */
/* background-repeat: none;
background-size: 103%; */
/* background-position-y: -5vw; */
/* background-position-y: -25vw; */

p{
  font-size: 30px;
  margin-right: 2vw;
}

`

