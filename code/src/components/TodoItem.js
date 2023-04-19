import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const SingleTodo = styled.p`
  cursor: pointer;
`;

export const TodoItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <wrapper>
      <SingleTodo onClick={() => onDone(todo.id)} key={todo.id} isDone={todo.isDone}>
        <p>{todo.text}</p>
        <div>Added {moment(todo.createdAt).format('HH:mm on MMM D, YYYY')}</div>
      </SingleTodo>
      <button onClick={() => onDelete(index)} type="button" title="Dete task">
        {' '}
        X
      </button>
    </wrapper>
  );
};
