import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

// import { TodoItem } from './TodoItem'

const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: orange;
  color: white;
  padding: 0 5px;
  margin: 10px 0;
  font-size: 20px;
  border-radius: 10px;
`

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id))
  }

  // v1 Mutability approach
  // const onDeleteTodo = (index) => {
  //   dispatch(todos.actions.deleteTodo(index))
  // }

  // v2 Immutability approach
  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))
  }

  return (
    <section className="todos">
      {items.map((item) => (
        // <TodoItem key={item.id} item={item} />
        <StyledTodoItem key={item.id}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>{item.text}</p>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </StyledTodoItem>
      ))}
    </section>
  )
}
