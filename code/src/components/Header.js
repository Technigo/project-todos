/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { tasks } from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import remove from '../img/remove.png';

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
          <div className="clear-all">
            <button
              className="clear-all-button"
              type="button"
              onClick={() => dispatch(tasks.actions.clearAll())}
            >
              <p>
                Clear all <img src={remove} alt="remove" />
              </p>
            </button>
            <p>{numberOfTasks} remaining todos</p>
            <h3>What do you need to do today?</h3>
            {/* This is where the number of tasks will be displayed */}
            <h4>{`${month} ${day}${ordinal}, ${year}`}</h4>{' '}
            {/* add current data here */}
          </div>
        </header>
      </div>
    </div>
  );
};
