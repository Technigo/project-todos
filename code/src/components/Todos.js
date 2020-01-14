import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Todo } from './Todo';

const StyledTodos = styled.div`
  /* border: 1px solid blue; */
`;

export const Todos = () => {
  const allTodos = useSelector(state => state.todos);

  return (
    <StyledTodos>
      <ul>
        {allTodos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </StyledTodos>
  );
};
