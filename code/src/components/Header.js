import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

export const Header = () => {
  const items = useSelector((store) => store.todos.items)
  const completedTasks = items.filter((item) => !item.completed)

  // Shows the current date
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const date = new Date();
  const mm = date.getMonth();
  const month = months[mm];
  const dd = date.getDate();
  const specificWeekday = date.toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <HeaderWrapper>
      <HeaderText>My to-do list</HeaderText>
      <DateText>{`${specificWeekday}, ${month} ${dd}`}</DateText>
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
  font-size: 20px;
`
const CountSpan = styled.span`
  font-weight: 700;
  `
const DateText = styled.p`
font-size: 26px;
font-family: 'Handlee', cursive;
`
const HeaderText = styled.p`
  font-size: 45px;
  //margin-top: 25%;
  font-family: 'Caveat', cursive;

  @media (min-width: 668px){ 
   // margin-top: 10%;
    font-size: 50px;
  }
  @media (min-width: 1025px) {
 
  }
  `
