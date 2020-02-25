import React from 'react'
import { useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'


export const TodoCount = () => {
  const unfinishedTasks = useSelector(state => state.tasks.items.filter(task => !task.isCompleted))
  const totalTasks = unfinishedTasks.length
  // const checkedQuantity = useSelector((state) => state.tasks)

  return (
    <>
      {totalTasks >= 1 && (
        <div class="task-count">
          <p>Total todos: {totalTasks}</p>
        </div>
      )}
    </>
  )
}