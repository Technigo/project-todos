import React from 'react';
import { useSelector } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { HeaderContainer } from '../styling/styling';

const Header = () => {
  const tasksArray = useSelector((store) => store.tasks.items);
  const completedTasks = tasksArray.filter((task) => task.isComplete);

  return (
    <HeaderContainer>
      <h1>My todo list</h1>
      <p>You have completed: {completedTasks.length} / {tasksArray.length} </p>
    </HeaderContainer>
  )
};

export default Header;