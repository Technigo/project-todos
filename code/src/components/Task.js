/* import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/todos'

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  console.log(task)

  return (
    <div className="tasks">
      <input
        name={task.text}
        type="checkbox"
        // checked={checked === task.text}
        className={task.complete === true ? 'finished' : 'notFinished'}
        onChange={() => dispatch(tasks.actions.checkComplete(task))} />
      <label htmlFor={task.text}>{task.text}</label>
    </div>
  )
} */