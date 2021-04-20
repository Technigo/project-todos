import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import tasks from '../reducers/tasks';

const TaskSummary = () => {
  const dispatch = useDispatch();
  
  const handleClear = () => {
    dispatch(tasks.actions.removeAllTasks())
  }

  return (
    <div>
      <p>X unfinished tasks</p>
      <button onClick={handleClear}>Clear all tasks</button>
    </div> 
  )
}
export default TaskSummary;