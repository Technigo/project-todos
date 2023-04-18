import React from 'react';
import styled from 'styled-components'

const date = new Date();
const todaysDate = date.toString().slice(0, 10);

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>Todays Tasks</HeaderTitle>
      <DateText>{todaysDate}</DateText>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 50%;
height: 20px;
margin: 5px auto;
`

const HeaderTitle = styled.h1`
font-family: 'Gaegu';
font-size: 24px;
color: lavender;
`

const DateText = styled.p`
font-size: 20px;
`