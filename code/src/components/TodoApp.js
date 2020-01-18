import React from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import styled from 'styled-components';
import { Todos } from 'components/Todos';
import { AddTodo } from 'components/AddTodo';
import { Filters } from 'components/Filters';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

const StyledTodoApp = styled.div``;

export const TodoApp = () => {
  return (
    <StyledTodoApp>
      <GlobalStyle />
      <Header />
      <Filters />
      <AddTodo />
      <Todos />
      <Footer />
    </StyledTodoApp>
  );
};
