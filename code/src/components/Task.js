import React from "react"
import { useDispatch } from "react-redux"

import { tasks } from "reducers/tasks"

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div>
      {task.isCompleted &&
        <button onClick={() => dispatch(tasks.actions.toggleTask(task))} > X</button >}
      {
        !task.isCompleted &&
        <button onClick={() => dispatch(tasks.actions.toggleTask(task))} > O</button>}
      <p>{task.title}</p>
      <button>Remove from list</button>
    </div >
  )
}