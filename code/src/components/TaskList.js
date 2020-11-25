import React from 'react';
import { useSelector } from 'react-redux';

import { TaskListItem } from './TaskListItem';

export const TaskList = () => {
  const allTasks = useSelector((store) => store.todos.tasks);

  return (
    <>
      {allTasks.map((task) => (
        <TaskListItem 
          key={task.id}
          task={task} />
      ))}
    </>
  )
}