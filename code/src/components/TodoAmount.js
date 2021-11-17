import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const TaskInfo = styled.div`
  display: flex;
  justify-content: space-around;
  height: 3vh;
  &.no-tasks {
    display: none;
  }
`;

const TaskInfoText = styled.h3`
  font-weight: 400;
  margin: 0;
`;

const TodoAmount = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);
  const completedListItems = todoListItems.filter(
    (listItem) => listItem.isComplete
  );
  const uncompletedListItems = todoListItems.filter(
    (listItem) => !listItem.isComplete
  );

  return (
    <TaskInfo
      className={
        uncompletedListItems.length <= 0 &&
        completedListItems.length <= 0 &&
        'no-tasks'
      }
    >
      <TaskInfoText>Tasks to do: {uncompletedListItems.length}</TaskInfoText>
      <TaskInfoText>Finished tasks: {completedListItems.length}</TaskInfoText>
    </TaskInfo>
  );
};

export default TodoAmount;
