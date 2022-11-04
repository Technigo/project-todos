import React from 'react';
import Dayjs from 'dayjs';
import { Styled } from './Header.styled';

export const Header = () => {
  const currentDate = Dayjs().format('MMM D, YYYY')
  return (
    <Styled.Container>
      <Styled.Date>{currentDate}</Styled.Date>
      <Styled.Heading>TASKLIST</Styled.Heading>
    </Styled.Container>
  )
}