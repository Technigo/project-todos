import React from "react"
import { useSelector } from "react-redux"

import { Task } from "./Task"

export const TaskContainer = () => {
  const tasks = useSelector((store) => store.tasks.allTasks)

  return (
    <section>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  )
}