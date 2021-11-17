import React from 'react';
import { useSelector } from 'react-redux';
import './summary.css';

export const Summary = () => {
  const todos = useSelector((store) => store.todos.items);

  const uncompletedTodos = todos.filter((item) => !item.isComplete).length;

  const completeTodos = todos.filter((item) => item.isComplete).length;

  if (uncompletedTodos < 1) {
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
        <h2>{uncompletedTodos}</h2>
        <h3>tasks for today</h3>
        {completeTodos > 0 ? (
          <p>{completeTodos} tasks done</p>
        ) : (
          <p>no tasks completed yet</p>
        )}
      </section>
    );
  }
};

export default Summary;
