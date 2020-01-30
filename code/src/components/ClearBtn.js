import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const ClearBtn = () => {
  const dispatch = useDispatch()

  return (
    <button
      className="clearButton"
      type="button"
      onClick={() => dispatch(todos.actions.removeAll())}>
      Remove All
    </button>
  )
}