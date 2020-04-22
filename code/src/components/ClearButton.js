import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const ClearButton = () => {
  const dispatch = useDispatch()

  const onRemoveAllClicked = () => {
    dispatch(tasks.actions.removeAllTasks())
  }

  return (
    <button type="button" onClick={onRemoveAllClicked}>
      CLEAR ALL
    </button>
  )
}


