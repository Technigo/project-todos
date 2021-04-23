import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillSave } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  font-size: 25px;
  padding: 0;
  margin-left: 5px;
`;

const SaveButton = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(todos.actions.editTodoContent(todo.id))}>
      <AiFillSave />
    </Button>
  );
};

export default SaveButton;
