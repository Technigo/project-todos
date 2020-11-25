import React from 'react';
import { useSelector } from 'react-redux'

export const Summary = () => {
  const list = useSelector((store) => store.todos.list)

  const numOfCompleted = list.todoItems.filter(item => item.done).length

  return (
    <div>
      <p>{numOfCompleted}/{list.todoItems.length} completed</p>
    </div>
  )
}