import React from 'react'
import { useSelector } from 'react-redux'

export const TodoCount = () => {
  const unfinishedTasks = useSelector((state) => state.tasks.items).filter((task) => !task.isCompleted)
  const totalUnfinishedTasks = unfinishedTasks.length

  return (
    <>
      <div className="task-count">
        {totalUnfinishedTasks === 0 && (
          <p>You have no tasks</p>
        )}
        {totalUnfinishedTasks >= 1 && (
          <p>You have {totalUnfinishedTasks} {totalUnfinishedTasks === 1 ? 'task' : 'tasks'}
          </p>
        )}
      </div>
    </>
  )
}