import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'; 
import { AiFillCloseCircle } from 'react-icons/ai';

import todos from '../reducers/todos';

const Button = styled.button`
  background: transparent;
  color: #ea9a96;
  border: none;
  margin-left: ${props => props.margin ? 'auto' : '15px'};
  font-size: 25px;
  padding: 0;

  &:hover {
    color: #f3c6c3;
    cursor: pointer;
  }
  
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const ExitButton = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(todos.actions.toggleEdit(todo.id))} margin={!todo.dueDate}>
      <AiFillCloseCircle />
    </Button>
  );
};

export default ExitButton;
