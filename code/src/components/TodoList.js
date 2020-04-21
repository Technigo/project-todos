import React from 'react'
import { TitleContainer } from './TitleContainer'
import { TodoInput } from './TodoInput'
import styled from 'styled-components/macro'
import { TodoSummary } from './TodoSummary'
import { TodoItems } from './TodoItems'
import { ClearAll } from './ClearAll'
import { Filter } from './Filters'

export const TodoList = () => {
  return (
    <TodoContainer>
      <TitleContainer />
      <TodoInput />
      <TodoItems />
      <ClearAll />
      <Filter />
      <TodoSummary />
    </TodoContainer>
  )
}

const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;
  height: 100vh;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    max-width: 800px;
  }
`