import React from 'react';
import { useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemoveTask = ({ task }) => {
    dispatch(tasks.actions.removeTask(task.id));
  }

  const handleCheckboxChange = ({task}) => {
    dispatch(tasks.actions.toggleCompleteStatus(task.id));
  }
  
  return (
    <div>
      <input type='checkbox' onChange={() => handleCheckboxChange({task})}></input>
      {task.id}{task.text}
      <button onClick={() => handleRemoveTask({ task })}>Remove me</button>
    </div>
  )
}

export default Task;