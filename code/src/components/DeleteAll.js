import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';

export const DeleteAll = () => {
  const dispatch = useDispatch();

  const deleteAllOnClick = () => {
    dispatch(tasks.actions.clearAllItems());
  }

  return (
    <button type="button" onClick={deleteAllOnClick}>Delete All</button>
  );
}