import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from '../reducers/todos'

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const CheckButton = styled.input`
  width: 20px;
  height: 20px;
  margin: 20px;
`

const TodoDiv = styled.div`
  display: flex;
  justify-content: center;
 width: 100%;
  border-bottom: 1px solid grey;
`

const Todo = styled.p`
  font-size: 18px;
  padding: 0 10px 0 10px;
  width: 150px;
`

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: right;
  margin: 20px;
  width: 80px;
  height: 20px;
  font-size: 15px;
`

const TodoList = () => {

  const items = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  return (
    <TodoContainer>
      {items.map(todo => (
        <TodoDiv key={todo.id}>
          <CheckButton
            type="checkbox"
            checked={todo.isComplete}
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