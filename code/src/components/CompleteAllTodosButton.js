import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillCheckCircle } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-size: 15px;
  margin-right: 5px;
`

const CompleteAllTodosButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(todos.actions.completeAllTodos())}
    >
      <Span>Check all</Span>
      <AiFillCheckCircle 
        size="1.5rem"
      />
    </Button>
  );
};

export default CompleteAllTodosButton;