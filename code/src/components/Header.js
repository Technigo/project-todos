import React from 'react';
import Dayjs from 'dayjs';
import { Styled } from './Header.styled';
// WHAT I WANT TO DO HERE:
// Add a date and day tracker at the top using DayJS
// Add an H1 below that

export const Header = () => {
  const currentDate = Dayjs().format('MMM D, YYYY')
  return (
    <Styled.Container>
      <Styled.Date>{currentDate}</Styled.Date>
      <Styled.Heading>TASKLIST</Styled.Heading>
    </Styled.Container>
  )
}