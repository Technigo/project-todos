import React from 'react';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = ({ task }) => {
    dispatch(tasks.actions.removeTask(task.id));
  }
  
  return (
    <div>
      {task.id}{task.text}
      <button onClick={() => handleRemoveTask({ task })}>Remove me</button>
    </div>
  )
}

export default Task;