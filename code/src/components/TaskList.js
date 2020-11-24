import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {Task} from './Task'

export const TaskList = () => {
  const todos = useSelector(store => store.tasks.todos)

  return (
    <div>
      {todos.map((task) => {
        return (
          <Task key={task.id} taskData={task} /> 
        )
      })}

    </div>
  )
}