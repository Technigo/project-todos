/* eslint-disable linebreak-style */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Todo = ({ task }) => {
  const dispatch = useDispatch()
  console.log(task)

  return (
    <div className="todo">
      <input
        name={task.text}
        type="checkbox"
        checked={task.complete === true ? 'checked' : ''}
        className={task.complete === true ? 'finished' : 'notFinished'}
        onChange={() => dispatch(todos.actions.checkComplete(task))} />
      <label htmlFor={task.text}>{task.text}</label>
    </div>
  )
}