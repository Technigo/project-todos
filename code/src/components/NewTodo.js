import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "reducers/todos"

const Todo = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  position: relative;
  background-color: yellow;
  width: 60%;
  margin: 0 20% 10px;
`

const Main = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`

const NewTodo = () => {
  const newTodo = useSelector((store) => store.todos.items)

  const dispatch = useDispatch()

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  const onTodoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index))
  }

  return (
    <Main>
      <h1>Total todos: {newTodo.length}</h1>
      {newTodo.map((newItem, todoIndex) => (
        <Todo key={newItem.id}>
          <h2>{newItem.name}</h2>
          <label>
            Completed:
            <input
              type="checkbox"
              checked={newItem.completed}
              onChange={() => onTodoToggle(newItem.id)}
            />
          </label>
          <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton>
        </Todo>
      ))}
    </Main>
  )
}

export default NewTodo
