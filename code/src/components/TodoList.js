import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

const CheckButton = styled.input`
  width: 20px;
  height: 20px;
  justify-self: start; 
  margin: 20px;
`

const TodoDiv = styled.div`
  display: flex;
  flex-direction: row;
`

const Todo = styled.p`
  margin: 20px;
  padding: 0 10px 0 10px;
`

const RemoveButton = styled.button`
  justify-self: end;
  margin: 20px;
  width: 80px;
  height: 20px;
`

const TodoList = () => {
  // Reach from items array from redux store
  const items = useSelector((store) => store.todos.items)

   // Create an instance of useDispatch hook
  const dispatch = useDispatch()

  return (
    <TodoContainer>
      {items.map(todo => (
        <TodoDiv key={todo.id}>
          <CheckButton
            type="checkbox"
            checked={todo.isComplete}
            // Dispatch (send) an action toggleComplete with one argument - id of a task
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
          <Todo>{todo.description}</Todo>
          <RemoveButton onClick ={() => dispatch(todos.actions.removeTodo(todo.id))}>
          Remove
          </RemoveButton>
        </TodoDiv>
      ))}
    </TodoContainer>
  )
}

export default TodoList