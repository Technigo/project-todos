import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './summary.css';

export const Summary = () => {
  const todos = useSelector((store) => store.todos.items);

  const uncompleteTodos = todos.filter((item) => !item.isComplete).length;

  const completeTodos = todos.filter((item) => item.isComplete).length;

  console.log(completeTodos);

  if (uncompleteTodos < 1) {
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
        <h2>{uncompleteTodos}</h2>
        <h3>tasks for today</h3>
        {completeTodos && <p>{completeTodos} tasks done</p>}
      </section>
    );
  }
};

export default Summary;
