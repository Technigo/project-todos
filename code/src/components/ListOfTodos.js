import React from 'react';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';
import { CompletedTodo } from './CompletedTodo';

import { MainWrapper } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const ListOfTodos = () => {
  const todos = useSelector((store) => store.todos);
  const completedTasks = useSelector((store) => store.completed);

  // const onlyFun = allTasks.filter((item) => item.category === 'Fun');

  return (
    <MainWrapper>
      {todos.map((task, index) => {
        return <Todo task={task} index={index} key={task.id} />;
      })}

      <h4>Completed tasks</h4>
      {completedTasks.map((task, index) => {
        return <CompletedTodo task={task} index={index} key={task.id} />;
      })}
    </MainWrapper>
  );
};
