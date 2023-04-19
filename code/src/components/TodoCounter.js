import React from 'react';
import { useSelector } from 'react-redux';

export const TodoCounter = () => {
  const numberOfUncompletedTasks = useSelector((store) => store.uncompleted.tasks.length);

  return (
    <p>You have {numberOfUncompletedTasks} unfinished task/s</p>
  )
};