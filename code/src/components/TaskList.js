import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'


export const TaskList = () => {
  const allTasks = useSelector((store) => store.tasks.allTasks)

  return (
    <ul>
      {allTasks.map((taskName) => (
        <Task key={taskName.id} taskName={taskName} />
      ))}
    </ul>
  )
}