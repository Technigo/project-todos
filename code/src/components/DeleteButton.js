import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiTwotoneDelete } from "react-icons/ai";

import todos from '../reducers/todos';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  font-size: 25px;
  padding: 0;
  margin-left: 5px;

  &:hover {
    color: #f3c6c3;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const DeleteButton = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
      <AiTwotoneDelete />
    </Button>
  );
};

export default DeleteButton;