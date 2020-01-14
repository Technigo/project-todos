import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from 'styled-components';
import { Todos } from 'components/Todos';
import { AddTodo } from 'components/AddTodo';

const StyledTodoApp = styled.div`
  /* border: 1px solid #ff0000; */
`;

export const TodoApp = () => {
  return (
    <StyledTodoApp>
      <GlobalStyle />
      <AddTodo />
      <Todos />
    </StyledTodoApp>
  );
};
