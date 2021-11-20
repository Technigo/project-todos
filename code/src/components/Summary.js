import React from 'react';
import { useSelector } from 'react-redux';

import './summary.css';

const Summary = () => {
  // counting all tasks, the compleated tasks and the not compleated tasks
  const task = useSelector((store) => store.todos.items);
  const taskLeft = task.filter((item) => !item.isComplete).length;
  const taskDone = task.filter((item) => item.isComplete).length;

  return (
    <div className="summary">
      <h1>{taskLeft} things to do</h1>
      <h2>{taskDone} things done</h2>
    </div>
  );
};

export default Summary;
