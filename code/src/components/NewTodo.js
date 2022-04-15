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
`
const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
`

//functional component
const NewTodo = () => {
  const newTodo = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()
  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId))
  }

  return (
    <section>
      {newTodo.map((newItem) => (
        <Todo key={newItem.id}>
          <h2>{newItem.name}</h2>
          <label>
            Completed:
            <input
              type="checkbox"
              checked={newItem.completed}
              onChange={() =>onTodoToggle(newItem.id) }
            />
          </label>
          <DeleteButton>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton>
        </Todo>
      ))}
    </section>
  )
}

export default NewTodo
