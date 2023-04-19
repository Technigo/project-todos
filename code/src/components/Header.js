import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'

const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, do MMMM yyyy');

  return (
    <>
      <GlobalStyles />
      <Title>To Do List</Title>
      <DateToday>{formattedDate}</DateToday>
    </>
  )
}

export default Header;

/* STYLING FOR HEADER */

const Title = styled.h1`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  text-align: center;
`;

const DateToday = styled.h3`
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  color: #183A1D;
  text-align: center;

  `