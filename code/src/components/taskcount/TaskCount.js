import React from 'react';
import { useSelector } from 'react-redux';

export const TaskCount = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const allTasks = taskList.length
  const incompleteTasks = taskList.filter((item) => item.complete === false).length
  const completeTasks = taskList.filter((item) => item.complete === true).length
  // eslint-disable-next-line max-len
  return <p>All tasks: {allTasks}; Incomplete Tasks: {incompleteTasks}; Complete Tasks: {completeTasks}</p>
}