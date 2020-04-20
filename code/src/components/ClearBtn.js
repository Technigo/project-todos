import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const ClearBtn = () => {
  const dispatch = useDispatch()

  return (
    <button className="btn-clear" onClick={() => {
      dispatch(todos.actions.removeAll())
    }}>
      Clear all
    </button>
  )
}
