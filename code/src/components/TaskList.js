import React from "react"
import { useSelector } from "react-redux"
import { Task } from "components/Task"

import "./taskList.css"

export const TaskList = () => {
  const allTasks = useSelector(state => state.todos.tasks)

  return (
    <ul className="task-list">
      {allTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul >
  )
}