import React from 'react';
import { useSelector } from 'react-redux';
import './summary.css';
// number of active todos, if no todos "YAY you are free"
// counter of done tasks
export const Summary = () => {
  const tasksLength = useSelector((store) => store.todos.items.length);

  return (
    <section className="summary-wrapper">
      <h2>{tasksLength}</h2>
      <h3>tasks for today</h3>
      <p>2 tasks done</p>
    </section>
  );
};

export default Summary;
