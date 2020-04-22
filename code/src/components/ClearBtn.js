import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const ClearBtn = () => {
  const dispatch = useDispatch()

  return (
    <button className="clear-btn" onClick={() => {
      dispatch(todos.actions.removeAll())
    }}>
      <i className="far fa-trash-alt"></i>
      <span>Clear</span>

    </button>
  )
}
