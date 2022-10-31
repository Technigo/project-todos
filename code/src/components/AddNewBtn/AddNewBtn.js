/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddNewBtn = () => {
  const dispatch = useDispatch()

  const addNewTodo = () => {
    dispatch(todos.actions.addNewTask())
  }

  return (
    <button id="addNewBtn" onClick={() => addNewTodo()} type="button">Add new task</button>
  )
}