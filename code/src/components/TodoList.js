import React from 'react'
import styled from 'styled-components/macro'
import { TitleContainer } from './TitleContainer'
import { TodoInput } from './TodoInput'
import { TodoItems } from './TodoItems'
import { ClearAll } from './ClearAll'
import { Filter } from './Filters'
import { TodoSummary } from './TodoSummary'

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