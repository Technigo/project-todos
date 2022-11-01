import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import React from 'react';
import { todos } from 'reducers/todos';
import { TodoList } from 'components/TodoList';
import { NewTodo } from 'components/NewTodo';
import { Header } from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Header />
      <NewTodo />
      <TodoList />
    </Provider>
  );
}
