import React from 'react';
import { useSelector } from 'react-redux';
import { CounterBox } from './Styling/GlobalStyle';

export const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.notes.items)
  const completedTasks = taskList.filter((notes) => notes.isDone);

  return (
    <CounterBox>
      <p>Task done - {completedTasks.length}/{taskList.length}</p>
    </CounterBox>
  );
}