import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const RemoveButton = () => {
  const dispatch = useDispatch()

  return (
    <button type='button' onClick={() => dispatch(todos.actions.removeAll())}>
      Remove All
    </button>
  )
}
