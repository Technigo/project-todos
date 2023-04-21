import React from 'react';
import { useSelector } from 'react-redux';
import { DeleteBox } from './Styling/GlobalStyle';

export const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.task.items)
  const completedTasks = taskList.filter((task) => task.isDone === true);

  return (
    <DeleteBox>
      <p>Task done - {completedTasks.length}/{taskList.length}</p>
    </DeleteBox>
  );
}