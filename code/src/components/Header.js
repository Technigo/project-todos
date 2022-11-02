import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { OuterWrapper } from './styling/GlobalStyling';

export const Header = () => {
  const todaysDate = moment().format('dddd Do MMM');
  const items = useSelector((store) => store.todo.items);
  const numberOfTodos = items.length;

  const HeaderBackground = styled.header`
    background-color: blue;
    width: 100%;
    text-align: center;
  `

  return (
    <OuterWrapper>
      <HeaderBackground>
        <h1>Todo List</h1>
        <h4>{todaysDate}</h4>
        <h5>You have {numberOfTodos} tasks to do!</h5>
      </HeaderBackground>
    </OuterWrapper>
  )
}