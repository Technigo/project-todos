import React from 'react';
import { useSelector } from 'react-redux';
import './summary.css';

export const Summary = () => {
  const tasksLength = useSelector((store) => store.todos.items.length);

  if (tasksLength < 1) {
    return (
      <section className="summary-wrapper-empty">
        <h2>HOORAY </h2>
        <h3>you are free!!!</h3>
        <p>- or be a bit productive and add moore moore moore tasks...</p>
      </section>
    );
  } else {
    return (
      <section className="summary-wrapper">
        <h2>{tasksLength}</h2>
        <h3>tasks for today</h3>
        <p>2 tasks done</p>
      </section>
    );
  }
};

export default Summary;
