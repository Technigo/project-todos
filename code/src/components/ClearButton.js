import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from 'reducers/todo'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button className="clear-all" type='button' onClick={() => dispatch(todo.actions.removeAll())}>
      Clear all
    </button>
  )
}