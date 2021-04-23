import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillCheckCircle } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  margin-left: 15px;
  font-size: 25px;
`;

const CompleteAllTodosButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(todos.actions.completeAllTodos())}
    >
      <AiFillCheckCircle />
    </Button>
  );
};

export default CompleteAllTodosButton;