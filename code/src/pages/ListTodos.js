import React from 'react';

import TodoList from '../components/TodoList';
import ListHeader from '../components/ListHeader';
import { Container } from '../library/Container';

const ListTodos = () => {
  return (
    <Container>
      <ListHeader />
      <TodoList />
    </Container>
  );
};

export default ListTodos;
