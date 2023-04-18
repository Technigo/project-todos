import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks';

export const CompleteAll = () => {
  const dispatch = useDispatch();

  const completeAllOnClick = () => {
    dispatch(tasks.actions.allCompleteItem(true));
  }

  return (
    <button type="button" onClick={completeAllOnClick}>Complete All</button>
  );
}
