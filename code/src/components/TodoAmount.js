import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const TaskInfo = styled.div`
  justify-content: space-around;
  height: 3vh;
  display: ${(props) => (props.noTask ? 'none' : 'flex')};
  .task-info-text {
    font-weight: 400;
    margin: 0;
  }
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
      noTask={
        uncompletedListItems.length <= 0 && completedListItems.length <= 0
      }
    >
      <h3 className='task-info-text'>
        Tasks to do: {uncompletedListItems.length}
      </h3>
      <h3 className='task-info-text'>
        Finished tasks: {completedListItems.length}
      </h3>
    </TaskInfo>
  );
};

export default TodoAmount;
