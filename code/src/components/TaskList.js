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
  margin: 20px 5px 10px 10px;
`

const TodoDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid grey;
`

const Todo = styled.p`
  font-size: 18px;
  padding: 0 5px 0 5px;
  width: 150px;
  
  @media (min-width: 768px) {
    width: 300px;
    margin-right: 100px;
    margin-left: 20px;
  @media (min-width: 1024px) {
    width: 400px;
`

const Text = styled.p`
  font-size: 12px;
  margin-top: 22px;
  width: 100px;
  
  @media (min-width: 768px) {
    width: 300px;
  @media (min-width: 1024px) {
    width: 400px;
`

const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: right;
  margin: 20px 20px 20px 0;
  width: 80px;
  height: 20px;
  font-size: 15px;
`

const TaskList = () => {
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
          <Text>{new Date(todo.dueDate).toLocaleDateString()}</Text>
          <RemoveButton onClick ={() => dispatch(todos.actions.removeTodo(todo.id))}>
            Remove
          </RemoveButton>
        </TodoDiv>
      ))}
    </TodoContainer>
  )
}

export default TaskList