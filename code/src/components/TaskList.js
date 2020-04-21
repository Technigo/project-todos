import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'

export const TaskList = () => {
  const tasks = useSelector((state) => state.notepad.items)
  return (
    <ul>
      {tasks.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </ul>
  )
}