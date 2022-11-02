import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const TasksCounter = () => {
  const totalTasks = useSelector((store) => store.tasks.items.length);
  return (
    <div>
      <p>{moment().format('MMMM d, YYYY')}</p>
      <p>Tasks left: {totalTasks}</p>
    </div>
  )
};

export default TasksCounter;