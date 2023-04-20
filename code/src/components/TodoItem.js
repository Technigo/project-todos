import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { SingleTodo } from './GlobalStyle';

const TodoText = styled.div`
  cursor: pointer;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
  font-size: 22px;
`;

const DateText = styled.div`
  font-style: italic;
  font-size: 16px;
  margin: 7px;
  opacity: 50%;
`;

const DeleteButton = styled.button`
  background: #f6f6f6;
  border: none;
  font-family: 'Baloo 2', cursive;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 9px;
`;

export const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <SingleTodo>
      <TodoText onClick={() => onDone(todo.id)} key={todo.id} isDone={todo.isDone}>
        <p>{todo.text}</p>
        <DateText>Added: {moment(todo.createdAt).format('MMM D, YYYY')}</DateText>
      </TodoText>
      <DeleteButton onClick={() => onDelete(index)} type="button" title="Remove task">
        {' '}
        X
      </DeleteButton>
    </SingleTodo>
  );
};
