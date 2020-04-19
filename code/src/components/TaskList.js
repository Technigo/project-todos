import React from 'react';
import { TaskInput } from './TaskInput.js';
import { TaskItem } from './TaskItem.js';
import { TaskSummary } from './TaskSummary.js';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const list = useSelector((store) => store.tasks.list);

  return (
    <div className="tasks-list">
      <TaskInput />
      {list.items.map((item, index) => (
        <TaskItem item={item} itemIndex={index} />
      ))}
      <TaskSummary />
    </div>
  )
}