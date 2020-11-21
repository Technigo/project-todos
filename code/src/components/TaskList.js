import React from 'react'
import { useSelector } from 'react-redux'

import { TaskItems } from './TaskItems'

export const TaskList = () => {
  // variable to hold the tasks
  const items = useSelector((state) => state.tasks)

  return (
    // <div>yay</div>
    <ul>
      {items.map((item) => (
        <TaskItems key={item.id} item={item} />
      ))
      }
    </ul>
  )
}