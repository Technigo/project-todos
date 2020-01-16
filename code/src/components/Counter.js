import React from 'react';
import { useSelector } from 'react-redux';

export const Counter = () => {
  const currentTasks = useSelector(state =>
    state.tasks.taskData.reduce(
      (total, task) => (task.complete ? total : total + 1),
      0
    )
  );

  return (
    <div>
      <h3>You have {currentTasks} left</h3>
    </div>
  );
};
