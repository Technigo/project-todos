/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-unused-vars */
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

import TrashImg from '../assets/icons8-trash.svg';

const Tasklist = () => {
  const items = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();

  const completedTasks = useSelector((store) => store.tasks.completedCount);
  // Because completedTasks returns NaN if no tasks are compleat, this function returns 0 insted of NaN
  // Known bug: is not correct when no items in list...
  const unfinishedTasks = () => {
    if (isNaN(completedTasks)) {
      return '0';
    } else return Math.max(0, completedTasks);
  };

  return (
    <section className="task-list">
      <h1>Tasks</h1>
      <p>
        Complted: {unfinishedTasks()} / {items.length}{' '}
      </p>
      {items.map((todo) => (
        <div
          key={todo.id}
          className={`${todo.complete ? 'line-through ' : ''}list-item`}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(tasks.actions.toggleChecked(todo))}
          />
          <p>{todo.text}</p>
          <button
            onClick={() => dispatch(tasks.actions.deleteTask(todo))}
            type="button"
          >
            <img src={TrashImg} alt="delete button" />
          </button>
        </div>
      ))}
    </section>
  );
};

export default Tasklist;
