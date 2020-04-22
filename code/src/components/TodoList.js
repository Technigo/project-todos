import React from 'react'
import { useSelector } from 'react-redux'
import { TodoSummary } from './TodoSummary'
import { TodoInput } from './TodoInput'
import { TodoItem } from './TodoItem'
import { Container } from 'lib/Container'
import styled from 'styled-components'

const ItemsList = styled.ul`
padding: 10px;
`

export const TodoList = () => {
  // Get list information for this list from the store
  const list = useSelector(store => store.todos.list)
  console.log(list)

  // Show todo input
  return (
    <Container>
      <ItemsList>
        {list.items.map((item, index) => (
          <TodoItem itemIndex={index}></TodoItem>
        ))}
      </ItemsList>
    </Container>
  )
}
