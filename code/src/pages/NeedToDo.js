import React from 'react';
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';
import { HomeBtn } from 'components/HomeBtn';

export const NeedToDo = () => {
  return (
    <section>
      <TaskList />
      <AddTask />
      <HomeBtn />
    </section>
  )
}