import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.complete);

  const doneTasks = () => {
    if (items.length === 0) {
      return 'Add task'
    } else if (items.length === completedTasks.length) {
      return 'All done'
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }
  return (
    <>
      <span>{doneTasks}</span>
      <h2>{completedTasks.length}/{items.length} tasks completed</h2>
    </>
  )
}