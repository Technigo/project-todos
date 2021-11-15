import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

const TodoSection = styled.section`
  width: 250px;
  margin: 0 auto;
`
const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`
const TodoText = styled.p`
  margin: 0;
  flex-grow: 1;
`

export const TodoList = () => {
  const items = useSelector(store => store.todos.items)
  const dispatch = useDispatch()

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id))
  }

  const onDeleteTodo = id => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <TodoSection>
      {items.map((item, index) => (
        <TodoItem key={item.id}>
          <TodoText>{item.text}</TodoText>
          <input type='checkbox' checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </TodoItem>
      ))}
    </TodoSection>
  )
}
