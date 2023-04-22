// import { EachTask } from 'components/eachTask/EachTask';
import React from 'react';
import { IncompleteTasks } from './IncompleteTasks';
import { CompleteTasks } from './CompleteTasks';
import { TaskListStyles } from './TaskList.styles';

export const TaskList = () => {
  return (
    <TaskListStyles>
      <h2>Task List</h2>
      <IncompleteTasks />
      <CompleteTasks />
    </TaskListStyles>
  )
}