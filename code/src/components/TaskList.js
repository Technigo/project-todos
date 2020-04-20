import React from 'react'
import { useSelector } from 'react-redux'


export const TaskList = () => {
  // Fetch all tasks from the store
  const allTasks = useSelector((store) => store.tasks)

  return (
    <div className="tasks">
      {allTasks.map((task) => (
        <TaskList key={task.id} task={task} />
      ))}
    </div>
  )
}