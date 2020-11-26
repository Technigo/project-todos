import React from 'react'
import { useSelector } from 'react-redux'

import { Task } from './Task.js'

export const TaskList = () => {

  const tasks = useSelector(store => store.todos.tasks)

  return (
    <>
      {tasks.map((task) =>
        <Task key={task.id} task={task} />
      )}
    </>
  )
}