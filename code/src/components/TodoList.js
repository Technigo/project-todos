import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { todos } from '../reducers/todos'

const TodoSection = styled.section`
  /* width: 250px;
  margin: 0 auto; */
  padding: 0 10px;
`
const TodoItem = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(244, 244, 244);
  padding: 1.5rem 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
`
const TodoText = styled.p`
  margin: 0;
  flex-grow: 1;
  font-size: 1.5rem;
`
const Checkbox = styled.input`
  border-radius: 50%;
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

  const onSelectItem = id => {
    dispatch(todos.actions.setModalItem(id))
  }

  return (
    <TodoSection>
      {items.map(item => (
        <TodoItem key={item.id}>
          <Checkbox
            type='checkbox'
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <TodoText onClick={() => onSelectItem(item.id)}>{item.text}</TodoText>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </TodoItem>
      ))}
    </TodoSection>
  )
}
