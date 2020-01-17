import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'css/task.css'

export const RemoveTask = (props) => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      className="btn-remove"
      onClick={() => dispatch(tasks.actions.removeTodo(props.task.id))}>
            X
    </button>
  )
}