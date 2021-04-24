import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillPlusCircle } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  display: flex;
  background: transparent;
  margin-right: 15px;
  border: none;
  color: #ea9a96;
  padding: 0;
  position: absolute;
  top: 5rem;
  right: 1.8rem;
  font-size: 4.5rem;

  @media (min-width: 768px) {
    top: 8.9rem;
    right: 7.8rem;
    font-size: 5.5rem;
  }
  
  @media (min-width: 1200px) {
    font-size: 6.5rem;
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