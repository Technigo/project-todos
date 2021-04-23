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
`;

const AddTodoButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(todos.actions.toggleShowForm())}>
      <AiFillPlusCircle 
        size="4.5rem"
      />
    </Button>
  );
};

export default AddTodoButton;