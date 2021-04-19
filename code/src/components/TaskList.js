import React from 'react'
import { useSelector } from 'react-redux'

export const TaskList = () => {
  const tasks = useSelector((store) => store.tasks.name)

  console.log(tasks)

  return (
    <div>
      {tasks.map(task => {
        <div>{task.text}</div>
      })}
    </div>
  )
}