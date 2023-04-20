import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { SingleTodo } from './GlobalStyle';

const ToDoText = styled.div`
cursor: pointer;
text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
font-size: 24px;
`;

const DateText = styled.div`
  font-style: italic;
  font-size: 14px;
  margin: 7px;
  opacity: 50%;
`;

const DeleteButton = styled.button`
  background: #a83256;
  border: none;
  font-family: 'DynaPuff', cursive;
  font-size: 18px;
  cursor: pointer;
  border-radius: 50%;
  padding: 0px 9px;
`;

export const ToDoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <SingleTodo>
      <ToDoText onClick={() => onDone(todo.id)} key={todo.id} isDone={todo.isDone}>
        <p>{todo.text}</p>
        <DateText>Added {moment(todo.createdAt).format('HH:mm on MMM D, YYYY')}</DateText>
      </ToDoText>
      <DeleteButton onClick={() => onDelete(index)} type="button" title="Delete task">
        {' '}
        X
      </DeleteButton>
    </SingleTodo>
  );
};