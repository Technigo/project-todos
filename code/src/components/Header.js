import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const totalTask = useSelector((store) => store.tasks.items.length)
  const completedTasks = useSelector((store) => store.tasks.completedCount)
  const tasksleft = totalTask - completedTasks
  console.log(completedTasks)
  return (
    <header>
      <h1>To do list!</h1>
      <p>Tasks done: {completedTasks} of {totalTask}</p>
      <p>Tasks left: {tasksleft}</p>
    </header>
  )
}