/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export const Header = () => {
  const items = useSelector((store) => store.todos.items)
  const completedTasks = items.filter((item) => !item.completed)

  // Shows the current date
  const now = new Date()
  const todaysDate = format(now, "EEEE',' dd MMMM yyyy'")

  return (
    <HeaderWrapper>
      <HeaderText>My to-do list</HeaderText>
      <DateText>{todaysDate}</DateText>
      <Count>You have <CountNumber>{completedTasks.length}</CountNumber> to-do:s</Count>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  position: relative;
`
const Count = styled.h3`
  color: black;
  font-size: 25px;
  font-family: 'Patrick Hand', cursive;
  font-weight: 400;
`
const CountNumber = styled.span`
  font-weight: 700;
  color: #e3591e;
`
const DateText = styled.h2`
  font-size: 30px;
  font-family: 'Patrick Hand', cursive;
  margin: 0;
  font-weight: 400;
`
const HeaderText = styled.h1`
  font-size: 45px;
  margin: 20px 0px 20px 0px;
  font-family: 'Caveat', cursive;
  font-weight: 400;

  @media (min-width: 668px){ 
    font-size: 50px;
  }
`