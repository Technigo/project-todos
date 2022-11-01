import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/GlobalStyles';

export const Overview = () => {
  const allTasks = useSelector((store) => store.tasks.taskData);
  let toBeDone = 0;

  allTasks.forEach((task) => {
    if (!task.complete) {
      toBeDone += 1
    }
  });

  return (
    <Wrapper>
      <h3>Your tasks</h3>
      <p>All: {allTasks.length}</p>
      <p>To be completed: {toBeDone}</p>
    </Wrapper>
  )
}
