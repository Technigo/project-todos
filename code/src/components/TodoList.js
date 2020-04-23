import React from 'react'
import { useSelector } from 'react-redux'
import { TodoInput } from './TodoInput.js'
import { TodoItem } from './TodoItem.js'
import { TodoSummary } from './TodoSummary.js'
import { ClearAllButton } from 'lib/ClearAllButton.js'
import styled from 'styled-components/macro'

export const TodoList = () => {
  // Get list information for this list from the store
  const list = useSelector((store) => store.todos.list)

  return (
    <TodoListSection>
      <TodoInput />
      {
        list.items.map((item, index) => (
          <TodoItem itemIndex={index}></TodoItem>
        ))
      }
      <TodoSummary />
      <ClearAllButton />
    </TodoListSection>
  )
}

const TodoListSection = styled.section`
  margin: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: linear-gradient(white, white);
  border-radius: 16px;
`