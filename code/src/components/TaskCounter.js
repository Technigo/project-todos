// src/components/TaskCounter.js
import React from 'react'
import { useSelector } from 'react-redux'

const TaskCounter = () => {
  const tasks = useSelector((state) => state.tasks)

  const uncompletedCount = tasks.filter((task) => !task.complete).length

  return (
    <div>
      <p>Uncompleted tasks: {uncompletedCount}</p>
    </div>
  )
}

export default TaskCounter
