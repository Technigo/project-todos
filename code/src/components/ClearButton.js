import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(tasks.actions.removeAllTasks())}
    >
      Delete All
    </button>
  );
};
