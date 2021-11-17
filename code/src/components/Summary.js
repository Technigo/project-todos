import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const task = useSelector((store) => store.todos.items);
  // const taskLeft = useSelector((store) => store.todos.isComplete.length);
  const taskLeft = task.filter((item) => !item.isComplete).length;
  const taskDone = task.filter((item) => item.isComplete).length;

  return (
    <div>
      {/* <h3>{taskAll} things in total.</h3> */}
      <h1>{taskLeft} things to do.</h1>
      <h2>{taskDone} things done.</h2>
    </div>
  );
};

export default Summary;
