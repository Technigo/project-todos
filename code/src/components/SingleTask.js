import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

export const SingleTask = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className="task-wrapper">
      <input
        name={task}
        onClick={() => dispatch(tasks.actions.toggleChecked(task))}
        checked={task.toggleChecked}
        type="checkbox"
        id="" />
    </div>

  )
}