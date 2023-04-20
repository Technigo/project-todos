import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import logo from 'assets/bucket-img.png'

const Header = () => {
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <>
      <StyledHeader>
        <Logo src={logo} /> <Styleh1>the BucketList</Styleh1>
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
margin-left: 10px;
`
const Logo = styled.img`
width: 50px;
height: 50px;
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