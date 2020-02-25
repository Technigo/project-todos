import React from 'react'
import { useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'


export const TodoCount = () => {
  const quantity = useSelector((state) => state.tasks.items.length)

  return (
    <>
      {quantity >= 1 && (
        <div class="task-count">
          <p>Total todos: {quantity}</p>
        </div>
      )}
    </>
  )
}