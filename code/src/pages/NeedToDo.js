import React from 'react';
import { TaskList } from 'components/TaskList';
import { AddTask } from 'components/AddTask';
import { HomeBtn } from 'components/HomeBtn';

export const NeedToDo = () => {
  return (
    <section>
      <h2>What do you need to do?</h2>
      <TaskList />
      <AddTask />
      <HomeBtn />
    </section>
  )
}