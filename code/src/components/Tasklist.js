import React from 'react';
import { Uncompleted } from './Uncompleted';
import { Completed } from './Completed';

export const Tasklist = () => {
  return (
    <div>
      <h1>To-do-list</h1>
      <h2>Undone</h2>
      <Uncompleted />
      <h2>Done</h2>
      <Completed />
    </div>
  )
}