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
  const todaysDate = format(now, "EEEE',' dd MMMM'")

  return (
    <HeaderWrapper>
      <HeaderText>My to-do list</HeaderText>
      <DateText>{todaysDate}</DateText>
      <Count>You have <CountSpan>{completedTasks.length}</CountSpan> to-do:s</Count>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  // padding: 10px;
  position: relative;
`

const Count = styled.p`
  color: black;
  font-size: 25px;
  font-family: 'Patrick Hand', cursive;
`
const CountSpan = styled.span`
  font-weight: 700;
  color: #e3591e;
`
const DateText = styled.p`
  font-size: 30px;
  //font-family: 'Handlee', cursive;
  font-family: 'Patrick Hand', cursive;
  margin: 0;
`
const HeaderText = styled.p`
  font-size: 45px;
  margin: 20px 0px 20px 0px;
  font-family: 'Caveat', cursive;

  @media (min-width: 668px){ 
   // margin-top: 10%;
    font-size: 50px;
  }
  @media (min-width: 1025px) {
 
  }
  `
/* Shows the current date
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const mm = date.getMonth();
  const month = months[mm];
  const dd = date.getDate();
  const specificWeekday = date.toLocaleDateString('en-US', { weekday: 'long' }); */