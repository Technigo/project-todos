import { AddTask } from 'components/addtask/AddTask';
import { TaskCount } from 'components/taskcount/TaskCount';
import { TaskList } from 'components/tasklist/TaskList';
import React from 'react';

export const Main = () => {
  return (
    <>
      <AddTask />
      <TaskCount />
      <TaskList />
    </>
  )
}