import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Header = () => {
  return (
    <HeaderStyling>
      <p>{moment().format('MMMM Do YYYY,  h:mm a')}</p>
    </HeaderStyling>)
}

export default Header;

const HeaderStyling = styled.div`
height: 30vh;
width: 100%;
font-size: 48px;
color: grey;
display: flex;
justify-content: flex-end;
align-items: flex-end;
background-color: transparent;


p{
  font-size: 30px;
  margin-right: 2vw;
  background-color: white;
  border-radius: 50px;
  padding: 10px;
}

font-family: 'Josefin Sans', sans-serif;

`

