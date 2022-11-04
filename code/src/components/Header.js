import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

export const Header = () => {
  // Import dispatches here
  const dispatch = useDispatch();

  // Get all tasks
  // Get number of tasks in list
  // Get completed tasks

  // Clear all tasks
  const handleClearTasks = (taskIndex) => {
    dispatch(tasks.actions.clearTasks(taskIndex));
  };

  return (
    <div>
      <div>
        <h1>To do</h1>
        <p>{moment().format('ddd, D MMM YYYY')}</p>
      </div>
      <div>
        <p>1/5 complete</p>
        <button type="button" onClick={handleClearTasks}>
          Clear all
        </button>
      </div>
    </div>
  );
};
