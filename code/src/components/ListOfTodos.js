import React from 'react';
import { useSelector } from 'react-redux';

import {
  MainWrapper,
  TaskWrapper,
  TaskDragImage,
} from '../styling/GlobalStyling';

export const ListOfTodos = () => {
  const allTasks = useSelector((store) => store.todos);

  const onlyFun = allTasks.filter((item) => item.category === 'Fun');

  return (
    <MainWrapper>
      {allTasks.map((task, index) => {
        return (
          <TaskWrapper key={task.id}>
            <input type="checkbox" name="gender" id={index} value="male" />
            <label htmlFor={index}>{task.task}</label>
            <TaskDragImage src="https://img.icons8.com/android/2x/menu.png" />
          </TaskWrapper>
        );
      })}
      {/* <p>Only Fun-category: </p>
      {onlyFun.map((task, index) => {
        return (
          <TaskWrapper key={task.id}>
            <input type="checkbox" name="gender" id={index} value="male" />
            <label htmlFor={index}>{task.task}</label>
            <TaskDragImage src="https://img.icons8.com/material-two-tone/2x/drag-reorder.png" />
          </TaskWrapper>
        );
      })} */}
    </MainWrapper>
  );
};
