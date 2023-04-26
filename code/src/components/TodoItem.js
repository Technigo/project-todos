import React from 'react';
import styled from 'styled-components';
import { SingleTodo } from './GlobalStyle';

const TodoText = styled.div`
  cursor: pointer;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 22px;
`;

const DeleteButton = styled.button`
  background: #f6f6f6;
  border: none;
  font-family: 'Baloo 2', cursive;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 9px;
  color: #ccc;
`;

export const TodoItem = ({ todo, onDelete, onDone }) => {
  return (
    <SingleTodo key={todo.id}>
      <TodoText onClick={() => onDone(todo.id)} isDone={todo.isDone}>
        <p>{todo.text}</p>
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)} type="button" title="Remove task">
        {' '}
        X
      </DeleteButton>
    </SingleTodo>
  );
};
