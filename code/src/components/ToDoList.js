import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';
import TaskCard from './TaskCard';

const ToDoList = () => {
  const tasks = useSelector((store) => store.tasks.tasks);

  const dispatch = useDispatch();

  return (
    <>
    
    </>

  )
};

export default ToDoList;