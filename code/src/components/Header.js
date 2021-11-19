import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import moment from 'moment'



export const Header = () => {
  const items = useSelector(store => store.todos.items)
  const notCompleted = items.filter(item => !item.isComplete)
  const todosCount = notCompleted.length 

    return (
      <HeaderContainer>
          <Heading>MY<br/>TO<br/>DO</Heading>
          <Date>{moment().format('ll')}</Date>
          <TodosCount>{todosCount} things to do</TodosCount>
      </HeaderContainer>
    )
  }

  const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 20px 35px 0 35px;
  box-sizing: border-box;
`

const Heading = styled.h1`
  font-size: 50px;
  font-family: 'Oxygen', sans-serif;
  font-weight: 600;
  margin: 50px 0 0 0;
`
const Date = styled.div`
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  margin-top: 10px;
`

const TodosCount = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 50px 50px 40px 0;
  font-family: 'Oxygen', sans-serif;
`