import React from 'react'
import styled from 'styled-components'
import headerImage from 'assets/headerImage.png'

const date = new Date();
const todaysDate = date.toString().slice(0, 15);

const Header = () => {
  return (
    <HeaderContainer>
      <TodaysDate>{todaysDate}</TodaysDate>
      <HeaderText>Todays todo list!</HeaderText>
      <HeaderImage
        src={headerImage}
        alt="background-header" />
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`

height: 25vh;
overflow: hidden;
background-position: center;

@media (min-width: 667px) and (max-width: 1024px) {
  height: 40vh;
}
@media (min-width: 1025px) {
  min-height: 400px;
}
`

const HeaderImage = styled.img`
    /* position: absolute;
    width: 600px;
    left: 95px;
    top: 0px; */
    position: relative;
    z-index: 1;
`

const HeaderText = styled.h1`
font-size: 40px;
color: #936f63;
position: absolute;
z-index: 2;
top: 40px;
margin-left: 30px;
@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 50px;
    top: 70px;
}
@media (min-width: 1025px) {
    font-size: 70px;
    top: 120px;
}
`

const TodaysDate = styled.p`
color: #936f63;
margin: 20px 0 5px 0;
margin-left: 30px;
position: absolute;
top: 30px;
z-index: 2;
@media (min-width: 667px) and (max-width: 1024px) {
    font-size: 18px;
    top: 60px;
}
@media (min-width: 1025px) {
    font-size: 22px;
    top: 120px;
}
`