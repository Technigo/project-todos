import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'

const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, do MMMM yyyy');

  return (
    <>
      <Title>To Do List</Title>
      <h3>{formattedDate}</h3>
    </>
  )
}

export default Header;

/* STYLING FOR HEADER */

const Title = styled.h1`
 font-family: verdana;
 text-align: center;
`