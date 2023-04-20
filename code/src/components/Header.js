import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'

const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, do MMMM yyyy');

  return (
    <>
      <GlobalStyle />
      <Title>To Do List</Title>
      <DateToday>{formattedDate}</DateToday>
    </>
  )
}

export default Header;

/* STYLING FOR HEADER */

const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  color: #658864;
`;

const DateToday = styled.h3`
  font-weight: 400;
  color: #183A1D;
  text-align: center;

  `