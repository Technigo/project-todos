import React from 'react';
import { useSelector } from 'react-redux';

import './TaskCounter.css';

export const TaskCounter = () => {
  const totalTasks = useSelector((store) => store.tasks.items.length);

  return (
    <>
      <div className='counter-container'>
        <p>Tasks left: {totalTasks}</p>
      </div>
    </>
  );
};
