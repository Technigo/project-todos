import React from 'react';
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';

export const NeedToDo = () => {
  return (
    <section>
      <TaskList />
      <AddTask />
    </section>
  )
}