import React from 'react';

import TodoList from '../components/TodoList';
import ListHeader from '../components/ListHeader';

const ListTodos = () => {
  return (
    <>
      <ListHeader />
      <TodoList />
    </>
  );
};

export default ListTodos;
