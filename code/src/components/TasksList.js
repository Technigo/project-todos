import React from 'react'
import { useSelector } from 'react-redux'


import { CheckBox } from './CheckBox'
import { RemoveButton } from './RemoveButton'
import "./taskslist.css"


export const TasksList = () => {
  // TODO - fetch all tasks from the store
  const allTasks = useSelector((store) => store.tasks)

  return (
    <div className="tasks-container">
      {allTasks.items.map((task) => (
        <div key={task.id} className="task">
          <CheckBox task={task} />
          <div className="task-detail">
            <div className="text"> {task.text} </div>
            <span className="elapsed-time" > Added {task.createdAt} </span>
          </div>
          <RemoveButton task={task} />
        </div>
      ))}
    </div>
  )
}
