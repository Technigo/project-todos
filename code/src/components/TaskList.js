import React from 'react';
import { useSelector } from 'react-redux';

import { TaskListItem } from './TaskListItem';
import { ListContainer, CelebrationContainer } from '../styles/taskListStyles';

export const TaskList = () => {
  const allTasks = useSelector((store) => store.todos.tasks);

  if (allTasks.length === 0) {
    return (
      <CelebrationContainer>
        <img src={require('assets/Party.svg')} alt='confetti explosion' style={{width: '45vh'}}/>
        <p>Nothing to do? Great, go enjoy life!</p>
      </CelebrationContainer>
    )
  } else {
    return (
      <ListContainer>
        {allTasks.map((task) => (
          <TaskListItem 
            key={task.id}
            task={task}
          />
        ))}
      </ListContainer>
    )
  }
};
