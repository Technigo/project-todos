import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'


export const TaskList = () => {
  const tasks = useSelector((state) => state.notepad.items)
  const tasksCopy = tasks.slice()
  const sortedTask = tasksCopy.sort((a, b) => a.dueDate - b.dueDate)
  return (
    <>
      {sortedTask.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </>
  )
}