/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { tasks } from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
// calculate the number of tasks
export const Header = () => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const ordinal = getOrdinalSuffix(day);
  const year = date.getFullYear();
  const dispatch = useDispatch();
  const numberOfTasks = useSelector((store) => store.tasks.length);

  return (
    <div className="header">
      <div className="header-only">
        <header>
          <h1>My To Do List ✅ </h1>
          <h2>What do you need to do today?</h2>
          {/* This is where the number of tasks will be displayed */}
          <h3>{`${month} ${day}${ordinal}, ${year}`}</h3>{' '}
          {/* add current data here */}
        </header>
      </div>
      <div className="header-and-tasks">
        <button
          className="clear-all-button"
          type="button"
          onClick={() => dispatch(tasks.actions.clearAll())}
        >
          <p>{numberOfTasks} tasks</p>❌ Clear all
        </button>
      </div>
    </div>
  );
};
