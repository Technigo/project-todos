import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {console.log(task.text + task.id)}
      {task.id} {task.text} {task.display ? "Display" : "Ej display"} {task.complete ? "Klar" : "Ej klar"}
      {moment(task.date).fromNow()}

      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeTask(task.id))
      }}>Remove</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.doneTask(task.id))
      }}>Done</button>
    </div >
  )
}

