import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const ClearAllBtn = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(tasks.actions.clearAll())
  }
  return (
    <button type="button" onClick={onButtonClick}>Clear All Tasks</button>
  )
}

export default ClearAllBtn;