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
`
const Arrow = styled.img`
transform: rotate(10deg);
width: 150px;
height: 150px;
align-self: flex-start;
`

const Styleh1 = styled.text`
font-family: 'Gaegu';
font-size: 60px;
font-weight: bold;
`
export const StyleP = styled.text`
font-family: 'Gaegu', cursive;
font-size: 20px;
font-weight: bold;
`

export default Header;