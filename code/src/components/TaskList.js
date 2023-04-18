import React from 'react';
import { AddNewTask } from './AddNewTask';
import { SingleTask } from './SingleTask';

export const TaskList = () => {
  return (
    <div className="task-list">
      <AddNewTask />
      <SingleTask />
    </div>
  )
}