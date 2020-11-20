import React from 'react';
import { useSelector } from 'react-redux';

export const ListOfTodos = () => {
  const allTasks = useSelector((store) => store.todos);

  const onlyFun = allTasks.filter((item) => item.category === 'Fun');
  console.log(onlyFun);

  return (
    <>
      <p>All tasks:</p>
      {allTasks.map((task, index) => {
        return (
          <p key={task.id}>
            {index + 1} {task.task}
          </p>
        );
      })}
      <p>Only Fun-category: </p>
      {onlyFun.map((task, index) => {
        return (
          <p key={task.id}>
            {index + 1} {task.task}
          </p>
        );
      })}
    </>
  );
};
