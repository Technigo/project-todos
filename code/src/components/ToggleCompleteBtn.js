import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const ToggleCompleteBtn = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(tasks.actions.completeAll())
  }
  return (
    <button type="button" onClick={onButtonClick}>Toggle completed</button>
  )
}

export default ToggleCompleteBtn;