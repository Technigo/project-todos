import React from 'react';

import { TaskList } from './TaskList';
import { AddTask } from './AddTask';

export const Tasks = () => {
  return (
    <>
      <AddTask />
      <TaskList />
    </>
  )
};