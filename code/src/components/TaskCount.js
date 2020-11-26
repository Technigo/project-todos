import React from 'react'
import { useSelector } from 'react-redux'

import { todos } from '../reducers/todos.js'

export const TaskCount = () => {

  const tasks = useSelector(store => store.todos.tasks)

  return (
    <p>You have completed {tasks.filter(task => task.isComplete === true).length} out of {tasks.length}, {tasks.filter(task => task.isComplete === false).length} more to go!</p>
  )
}