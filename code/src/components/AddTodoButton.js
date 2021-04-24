import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillPlusCircle } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  display: flex;
  background: #ffffff;
  border: none;
  color: #ea9a96;
  padding: 0;
  position: absolute;
  --button-size-sm: 4.5rem;
  top: calc(var(--button-size-sm) / 2 * -1);
  right: 1.8rem;
  font-size: var(--button-size-sm);

  &:hover {
    color: #f3c6c3;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    --button-size-md: 5.5rem;
    top: calc(var(--button-size-md) / 2 * -1);
    font-size: var(--button-size-md);
  }
  
  @media (min-width: 1200px) {
    --button-size-lg: 6.5rem;
    top: calc(var(--button-size-lg) / 2 * -1);
    font-size: var(--button-size-lg);
  }
`;

const AddTodoButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(todos.actions.toggleShowForm())}>
      <AiFillPlusCircle />
    </Button>
  );
};

export default AddTodoButton;