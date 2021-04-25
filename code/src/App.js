import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos';

import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';
import TodoCounter from 'components/TodoCounter';
import Header from 'components/Header';

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
      <TodoCounter />
    </Provider>
  );
};
