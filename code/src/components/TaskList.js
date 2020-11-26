import React from 'react';
import { useSelector } from 'react-redux';

import { TaskListItem } from './TaskListItem';
import { ListContainer } from '../styles/taskListStyles';

export const TaskList = () => {
  const allTasks = useSelector((store) => store.todos.tasks);

  if (allTasks.length === 0) {
    return (
      <p>Nothing to do? Great, go enjoy life! 🎷</p>
    )
  } else {
    return (
      <ListContainer>
        {allTasks.map((task) => (
          <TaskListItem 
            key={task.id}
            task={task} />
        ))}
      </ListContainer>
    )
  }
};
