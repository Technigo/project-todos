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
  font-size: 1.5rem;

  &:hover {
    color: #f3c6c3;
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Span = styled.span`
  font-size: 15px;
  margin-right: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`

const CompleteAllTodosButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(todos.actions.completeAllTodos())}
    >
      <Span>Check all</Span>
      <AiFillCheckCircle />
    </Button>
  );
};

export default CompleteAllTodosButton;