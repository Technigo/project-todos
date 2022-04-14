import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const HeaderTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 40px;
  text-align: center;
`

const DateTime = styled.p`
  text-align: center;
  color: white;
  letter-spacing: 2px;

`

const Header = () => {
    const dateTime = moment().format("MMMM Do");
    
    return (
        <>
        <HeaderTitle>Get it done</HeaderTitle>
        <DateTime>{dateTime}</DateTime>
        </>
    )
}

export default Header

