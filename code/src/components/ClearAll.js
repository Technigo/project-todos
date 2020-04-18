import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

export const ClearAll = () => {
  const dispatch = useDispatch()
  const everyTodos = useSelector(store => store.todos.list.todos.length)

  const handleClearAll = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }

  return (
    <button type="button"
    onClick={handleClearAll}>
      Clear All
    </button>
  )
}