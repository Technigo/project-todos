import React from 'react'
import { useSelector } from 'react-redux'

import { Task } from './Task'

export const TaskList = () => {
 
  const items = useSelector((store) => store.tasks.items)

  return (
    <>
      {items.map((item, index) => (
        <Task key={index} item={item} />
      ))}
    </>
  )
}