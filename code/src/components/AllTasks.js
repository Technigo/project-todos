import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from './Task';

export const AllTasks = () => {
  const allTasks = useSelector(state => state.tasks);

  return (
    <div>
      {allTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
