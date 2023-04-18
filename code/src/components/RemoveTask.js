import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const RemoveTask = ({ task }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(tasks.actions.removeTask(task.id));
  };

  return (
    <div>
      <span>{task.text}</span>
      <button type="button" onClick={removeTask}>Remove</button>
    </div>
  );
};
