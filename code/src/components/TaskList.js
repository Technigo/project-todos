import React from 'react'
import { useSelector } from 'react-redux'

import { EmptyList } from './EmptyList'
import { TaskItems } from './TaskItems'


import './TaskList.css'

export const TaskList = () => {
  const items = useSelector((state) => state.tasks.items)

  // here I think they empty page goes
  if (items.length === 0 ) {
    return (
      <EmptyList />
    )
  }

  return (
    <ul>
      {items.map((item) => (
        <TaskItems key={item.id} item={item} />
      ))
      }
    </ul>
  )
}