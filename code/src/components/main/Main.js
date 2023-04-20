import { AddTask } from 'components/addtask/AddTask';
import { TaskCount } from 'components/taskcount/TaskCount';
import { TaskList } from 'components/tasklist/TaskList';
import React from 'react';
import { MainStyles } from './Main.styles';

export const Main = () => {
  return (
    <MainStyles>
      <AddTask />
      <TaskCount />
      <TaskList />
    </MainStyles>
  )
}