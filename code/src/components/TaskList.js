import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'

export const TaskList = () => {
  const taskslisted = useSelector((store) => store.tasks.items)

  return (
    <ul>
      {taskslisted.map((task) => (
        <Task key={task.id} task={task} timeCreated={task.timeCreated}/>
      ))}
    </ul>
  )
}