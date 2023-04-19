import React from 'react';
import { Uncompleted } from './Uncompleted';
import { Completed } from './Completed';
import { AddTask } from './AddTask';
import { TodoCounter } from './TodoCounter';

export const Tasklist = () => {
  return (
    <div>
      <h1>To-do-list</h1>
      <AddTask />
      <h2>Undone</h2>
      <Uncompleted />
      <h2>Done</h2>
      <Completed />
      <TodoCounter />
    </div>
  )
}