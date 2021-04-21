import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import tasks from '../reducers/tasks';

const TaskSummary = () => {
  const allTasks = useSelector(store => store.tasks.items)
  const dispatch = useDispatch();
  
  const onClear = () => {
    dispatch(tasks.actions.setAllTaskstoCompleted());
  };

  const uncompleteTasks = allTasks.filter(item => item.isComplete===false).length;

  return (
    <div>
      <p>{uncompleteTasks} unfinished tasks</p>
      <button onClick={onClear}>I have done it all!</button>
    </div> 
  )
}
export default TaskSummary;