import React from 'react';
import { useSelector } from 'react-redux';
import { SummaryContainer, SummaryItem } from 'styles/headerStyles';

export const Summary = () => {
  const allTasks = useSelector((store) => store.todos.tasks)
  const doneTasks = allTasks.filter(task => task.done === true)

  return(
    <SummaryContainer>
      <SummaryItem>{doneTasks.length}/{allTasks.length} done</SummaryItem>
    </SummaryContainer>
  )
}