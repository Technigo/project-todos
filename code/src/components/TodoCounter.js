import React from 'react';
import { useSelector } from 'react-redux';

export const TodoCounter = () => {
  const numberOfUncompletedTasks = useSelector((store) => store.uncompleted.tasks.length);

  return (
    <div className="counter-div">
      <p>You have {numberOfUncompletedTasks} unfinished task/s</p>
    </div>
  )
};