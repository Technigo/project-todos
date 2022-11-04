import React from 'react';
import { TaskList } from 'components/ToDoLists';
import { AddTask } from 'components/AddToDo';
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