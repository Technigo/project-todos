import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {
  const todaysDate = moment().format('dddd Do MMM');
  const items = useSelector((store) => store.todo.items);
  const numberOfTodos = items.length;

  const HeaderBackground = styled.header`
    width: 100%;
    text-align: center;
    position: relative;
    height: 25vh;
    width: 100%; 
    color: #ffff;
  `
  const HeaderTitle = styled.h1`
    font-weight: 600;
    font-family: 'Roboto';
    text-transform: uppercase;
  `

  return (
    <HeaderBackground>
      <HeaderTitle>Todo List</HeaderTitle>
      <h4>{todaysDate}</h4>
      <h5>You have {numberOfTodos} tasks to do!</h5>
    </HeaderBackground>
  )
}