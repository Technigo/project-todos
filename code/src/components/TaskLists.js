import React from 'react'
import { useSelector } from 'react-redux'
import { CheckBox } from './CheckBox'


export const TaskLists = () => {
  // TODO - fetch all tasks from the store
  const allTasks = useSelector((store) => store.tasks)

  return (
    <div className="tasks-container">
      {allTasks.items.map((task) => (
        <div key={task.id} className="task">
          <CheckBox task={task} />
          <div className="text"> {task.text} </div>
        </div>
      ))}
    </div>
  )
}
