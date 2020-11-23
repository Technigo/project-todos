import React from 'react'
import { useSelector } from 'react-redux'

import { TaskItems } from './TaskItems'


import './TaskList.css'

export const TaskList = () => {
  const items = useSelector((state) => state.tasks.items)

  return (
    <ul>
      {items.map((item) => (
        <TaskItems key={item.id} item={item} />
      ))
      }
    </ul>
  )
}