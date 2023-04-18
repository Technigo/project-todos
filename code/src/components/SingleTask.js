import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const SingleTask = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className="task-wrapper">
      <input
        type="checkbox"
        onCheck={() => dispatch(tasks.action.addItem(task))}
        id=""
        name="todos" />
    </div>

  )
}