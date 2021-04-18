import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';

export const Task = ({task}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type='checkbox'
        checked={task.complete}
        onClick={() => dispatch(tasks.actions.toggleCompleted(task))}>
      </input>
      {task.text}
      <button
        type="button"
        onClick={() => dispatch(tasks.actions.deleteTask(task))}>
        Delete
      </button>
    </div>
  )
}
