import React from 'react';
import styled from 'styled-components'
import moment from 'moment'
import logo from 'assets/bucket-img.png'

const Header = () => {
  const dateTime = moment().format('dddd, MMM Do')

  return (
    <>
      <StyledHeader>
        <Styleh1>the BucketList</Styleh1>
        <Logo src={logo} />
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
`
const Logo = styled.img`
width: 30%;
height: 30%;
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