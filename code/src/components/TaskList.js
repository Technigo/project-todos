import React from 'react'
import { Task } from './Task'
import { useSelector } from 'react-redux'

export const TaskList = () => {

  const task = useSelector (
    (state) => state.tasks
  )

  console.log(task)

  return (
    <div className="tasklist-container">
      {task.map(task => {
        return (
          <Task
            key={task.id}
            {...task}
          />
        )
      })}
    </div>
  )
}