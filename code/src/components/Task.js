import React from 'react';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.markCompleted(task.id))
  };

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(task.id))
  };

  return (
    <li>
      <p><span>{task.complete}</span>{task.text} Category: {task.category}</p>
      <label>
        Done?
        <input 
          type='checkbox'
          checked={task.complete}
          onChange={handleCheckboxClick}
        />
      </label>
      <button 
        type="button" 
        onClick={handleRemoveButtonClick}>
          <span role='img' aria-label='Bin'>🗑</span>
      </button>
    </li>
  );
};