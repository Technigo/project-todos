import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { todos } from 'reducers/todos'

export const Remove = props => {
  const dispatch = useDispatch()

  const handleRemoval = id => {
    dispatch(todos.actions.removeOne(id))
  }

  return (
    <>
      <button type="button" onClick={() => handleRemoval(props.todos.id)}>
        <span role="button" aria-label="remove">❌</span>
      </button>
    </>
  )
}