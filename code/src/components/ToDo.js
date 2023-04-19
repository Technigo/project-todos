import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import styled from 'styled-components'
import tasks from 'reducers/list'

const ToDo = () => {
  const todoList = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  const ToggleTodo = (todoId) => {
    dispatch(tasks.actions.toggleItem(todoId))
  }

  const DeleteTodo = (index) => {
    dispatch(tasks.actions.deleteItem(index))
  }

  return (
    todoList.map((todoItem, todoIndex) => (
      <TodoItem key={todoItem.id}>
        <TodoItemText>{todoItem.name}</TodoItemText>
        <input
          className="checkbox"
          type="checkbox"
          checked={todoItem.isDone}
          onChange={() => ToggleTodo(todoItem.id)} />
        <label htmlFor="done">CHECK!</label>
        <DelButton onClick={() => DeleteTodo(todoIndex)}>
          <Delete role="img" aria-label="delete">
            {/* ✖  */}
             ❎
          </Delete>
        </DelButton>
      </TodoItem>
    ))
  )
}

export default ToDo;