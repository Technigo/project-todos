import React from 'react'
import { useDispatch } from 'react-redux' //because we will have a action
import { tasks } from 'reducers/tasks'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button type="button" onClick={() => dispatch(tasks.actions.removeAll())}>
      Remove all
    </button>
  )
}