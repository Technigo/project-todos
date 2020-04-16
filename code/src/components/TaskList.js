import React from 'react'
import { Task } from 'components/Task'

export const TaskList = () => {
  const allTasks = []

  return (
    //Tasks with a checkbox and text - Use map on tasks in state
    <div>
      {allTasks.map((task) => (
        <Task key={task.id} task={task.text} />
      ))}
    </div>
  )
}