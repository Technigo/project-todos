import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { CompletedTodo } from './CompletedTodo';

import { MainWrapper } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const ListOfTodos = () => {
  const allTasks = useSelector((store) => store.todos);
  const completedTasks = useSelector((store) => store.completed);

  // const onlyFun = allTasks.filter((item) => item.category === 'Fun');

  return (
    <MainWrapper>
      {allTasks.map((task, index) => {
        return <Todo task={task} index={index} key={task.id} />;
      })}

      <h4>Completed</h4>
      {completedTasks.map((task, index) => {
        return <CompletedTodo task={task} index={index} key={task.id} />;
      })}
    </MainWrapper>
  );
};
