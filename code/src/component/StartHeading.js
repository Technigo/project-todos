import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 45px 35px 0 35px;
  box-sizing: border-box;
`

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 50px 0 0 0;
`

const TodosCount = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 40px 0;
`

export const StartHeading = () => {
  const items = useSelector(store => store.todos.items)
  const notCompleted = items.filter(item => !item.isComplete)
  const todosCount = notCompleted.length 

    return (
      <HeadingContainer>
          <Heading>Your<br/>what to do</Heading>
          <TodosCount>{todosCount} things to do</TodosCount>
      </HeadingContainer>
    )
  }