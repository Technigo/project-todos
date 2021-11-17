import React from 'react';
import { useDispatch } from 'react-redux';

import tasks from 'reducers/tasks';

const DeleteTask = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };
  return (
    <button onClick={() => onDeleteTask(item)}>
      {' '}
      <span role='img' aria-label='img'>
        ✖️
      </span>{' '}
    </button>
  );
};

export default DeleteTask;
