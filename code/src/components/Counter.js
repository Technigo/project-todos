import React from 'react'
import { useSelector } from 'react-redux'

// WHAT I WANT TO DO HERE:
// Add a counter that displays the number of completed tasks vs remainining (X/Y) /DONE

// HEADER
// COUNTER
// TASKFORM
// TASKLIST

export const Counter = () => {
  const allTasks = useSelector((store) => store.tasks.items);
  const completedTasks = allTasks.filter((items) => items.isCompleted === true)
  if (allTasks.length !== completedTasks.length) {
    return (
      <h2>You have completed {completedTasks.length}/{allTasks.length} tasks</h2>
    )
  } else {
    return (
      <h2>No tasks remaining...</h2>
    )
  }
}