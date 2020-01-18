import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'css/task.css'

export const CompletedTask = (props) => {
  const dispatch = useDispatch()

  return (
    <label className="checkbox">
      <input
        className="checkbox"
        type="checkbox"
        checked={props.task.complete}
        onChange={() => dispatch(tasks.actions.toggleCompleted(props.task.id))} />
      {props.task.complete && <span className="check" role="img" aria-label="checked">✔</span>}
    </label>
  )
}