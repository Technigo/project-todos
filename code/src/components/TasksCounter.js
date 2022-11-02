import React from 'react';
import { useSelector } from 'react-redux';

const TasksCounter = () => {
  const totalTasks = useSelector((store) => store.tasks.items.length);
  return (
    <div>
      <p>Tasks left: {totalTasks}</p>
    </div>
  )
};

export default TasksCounter;