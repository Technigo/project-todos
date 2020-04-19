import React from 'react'
import { TitleContainer } from './TitleContainer'
import { TodoInput } from './TodoInput'
import styled from 'styled-components'
import { TodoSummary } from './TodoSummary'
import { TodoItems } from './TodoItems'
import { ClearAll } from './ClearAll'

export const TodoList = () => {
  return (
    <TodoContainer>
      <TitleContainer />
      <TodoInput />
      <TodoItems />
      <ClearAll />
      <TodoSummary />
    </TodoContainer>
  )
}

const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`