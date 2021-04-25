import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components'

import todos from '../reducers/todos'

const ListView = styled.div `
  border-bottom: 1px solid lightgray; 
  width: 100%;
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  padding: 10px 0; 
  font-size: 15px; 
`
    
const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks) //hook to get things out of the store , specify from where
  const dispatch = useDispatch()  

  return (
    <>
     {tasks.map(todo => (
        <ListView key={todo.id}>
          <input
            type='checkbox'
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          /> 
          <p>{todo.description}</p>
          <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
            <span
              role="img"
              aria-label="delete"
            >
              x
            </span> 
          </button>
        </ListView>
     ))}
    </>
  )
}

export default TodoList