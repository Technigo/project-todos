import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import arrow from 'assets/arrow.png'

const Header = () => {
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <>
      <StyledHeader>
        <Arrow src={arrow} alt="arrow" />
        <Styleh1>the BucketList</Styleh1>
      </StyledHeader>
      <section className="date">
        <StyleP>{dateTime}</StyleP>
      </section>
    </>
  )
};
const StyledHeader = styled.header`
display: flex;
flex-direction: row;
align-items: center;
width: 350px;
margin-top: 20px;

@media screen and (min-width: 768px) {
  flex-direction: row;
}
`
const Arrow = styled.img`
transform: rotate(10deg);
width: 150px;
height: 150px;
align-self: flex-start;

@media screen and (min-width: 360px) {
  align-self: flex-start;
  width: 100px;
  height: 100px;
}
`

const Styleh1 = styled.text`
font-family: 'Gaegu';
font-size: 60px;
font-weight: bold;

@media screen and (min-width: 360px) {
  font-size: 40px;
}
`
export const StyleP = styled.text`
font-family: 'Gaegu', cursive;
font-size: 20px;
font-weight: bold;
`

export default Header;