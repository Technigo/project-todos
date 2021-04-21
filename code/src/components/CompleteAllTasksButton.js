import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 

import todos from '../reducers/todos';

const Button = styled.button`
`;

const CompleteAllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(todos.actions.completeAllTasks())}
    >
      COMPLETE ALL
    </Button>
  );
};

export default CompleteAllTasksButton;