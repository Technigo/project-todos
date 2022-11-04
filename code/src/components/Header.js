/* eslint-disable max-len */
import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Header = () => {
  const todaysDate = moment().format('dddd Do MMM');
  const items = useSelector((store) => store.todo.items);
  const numberOfTodos = items.length;
  const completeItems = items.filter((listItem) => listItem.isCompleted)
  const numberOfCompleteItems = completeItems.length

  return (
    <HeaderBackground>
      <HeaderTextWrapper>
        <HeaderTitle>To-do List</HeaderTitle>
        <h4>{todaysDate}</h4>
        <h5>You have {numberOfTodos - numberOfCompleteItems} out of {numberOfTodos} tasks to do!</h5>
      </HeaderTextWrapper>
    </HeaderBackground>
  )
}

const HeaderBackground = styled.header`
    width: 100%;
    text-align: center;
    position: relative;
    height: 25vh;
    color: #ffff;
  `
const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.h1`
    font-weight: 700;
    font-family: 'Roboto';
    text-transform: uppercase;
  `