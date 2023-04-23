/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from './reducers/list'

const TodoContainer = styled.section`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const TodoItem = styled.article`
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 6px;
  background: #86bbd8;
  position: relative;
  @media (min-width: 768px) {
    width: 500px;
  }
`

const TodoItemText = styled.h2`
  font-family: 'Quicksand', sans-serif;
  color: #D885A3;
  font-size: 20px;
  word-wrap: break-word;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 6px;
  background: none;
  border: none;
  cursor: pointer;
`

const DeletePlus = styled.span`
  font-size: 20px;
`

const ToDo = () => {
  const todoList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const ToggleTodo = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  const DeleteTodo = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  return (
    <TodoContainer>
      {todoList.map((todoItem, todoIndex) => (
        <TodoItem key={todoItem.id}>
          <TodoItemText>{todoItem.name}</TodoItemText>
          <input
            className="checkbox"
            type="checkbox"
            checked={todoItem.isDone}
            onChange={() => ToggleTodo(todoItem.id)} />
          <label htmlFor="fixed">Fixed it!</label>
          <DeleteButton onClick={() => DeleteTodo(todoIndex)}>
            <DeletePlus role="img" aria-label="delete">
              {/* ✖  */}
             ❎
            </DeletePlus>
          </DeleteButton>
        </TodoItem>
      ))}
    </TodoContainer>
  )
}

export default ToDo;