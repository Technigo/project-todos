import React from 'react'
import { useSelector } from 'react-redux'


export const TaskLists = () => {
  // TODO - fetch all tasks from the store
  const allTasks = useSelector((store) => store.tasks)

  return (
    <div className="tasks-container">
      {allTasks.map((task) => (
        <div key={task.id} className="task">
          <div className="status"> {task.complete}</div>
          <div className="text"> {task.text} </div>
        </div>
      ))}
    </div>
  )
}
