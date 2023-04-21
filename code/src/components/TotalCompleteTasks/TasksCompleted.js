import React from 'react';
import { useSelector } from 'react-redux';
import './TasksComplete.css';

const TotalCompleteItems = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const completedTasks = taskList.filter((task) => task.isDone === true);

  return (
    <h3>Number of completed tasks: {completedTasks.length}/{taskList.length}</h3>
  );
}

export default TotalCompleteItems;
