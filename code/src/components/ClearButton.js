import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'css/task.css'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      className="btn-clear"
      type="button"
      onClick={() => dispatch(tasks.actions.removeAll())}>
            Remove all
    </button>
  )
}