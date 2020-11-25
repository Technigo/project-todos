import React from 'react';
import { useSelector } from 'react-redux';
import { SummaryContainer } from 'styles/headerStyles';

export const Summary = () => {
  const allTasks = useSelector((store) => store.todos.tasks)
  const doneTasks = allTasks.filter(task => task.done === true)

  return(
    <SummaryContainer>
      <p>{allTasks.length} total</p>
      <p>{doneTasks.length} done</p>
      <p>{allTasks.length - doneTasks.length} left</p>
    </SummaryContainer>
  )
}