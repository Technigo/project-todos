import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const EachTask = ({ singleTask }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{singleTask.task}</p>
      <p>Task Complete: {singleTask.complete.toString()}</p>
      <button type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))}>Complete/Incomplete</button>
      <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}>Delete</button>
    </div>
  )
}