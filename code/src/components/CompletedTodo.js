import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';

// Reducers
import { todos } from '../reducers/todos';

// Styling
import { TaskWrapper, Button } from '../styling/GlobalStyling';

const CompletedTime = styled.p`
  font-size: 10px;
  font-style: italic;
  margin: 0;
`;

// -----------------------------------------------------------------------------

export const CompletedTodo = ({ task, index }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.removeTodo(task.id));
  };

  return (
    <TaskWrapper>
      <CompletedTime>
        Completed {moment(task.completedAt).startOf('second').fromNow()}
      </CompletedTime>
      <p>{task.task}</p>
      <p>{task.category}</p>
      <Button onClick={handleClick}>✕</Button>
    </TaskWrapper>
  );
};
