import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

const AllTasks = () => {
  const tasksInList = useSelector(store => store.task.items.length);

  const tasksToDo = useSelector(store => store.task.items.filter(item => !item.isComplete).length)


  return (
    
      <p>{tasksToDo}/{tasksInList} tasks to do </p>

  )
}

export default AllTasks;