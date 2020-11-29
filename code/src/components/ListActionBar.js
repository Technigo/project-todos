import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';

export const ListActionBar = () => {
  const dispatch = useDispatch();

  const handleClickReset = () => {
    dispatch(todos.actions.removeAllTasks());
  }

  const handleClickDone = () => {
    dispatch(todos.actions.setAllTasksDone());
  }

  return (
    <div className="action-bar">
      <button type="button" className="reset-button" onClick={handleClickReset}>Clear all tasks</button>
      <button type="button" className="set-done-button" onClick={handleClickDone}>Set all tasks to done</button>
    </div>
  )
}