import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todo from 'reducers/todo';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import Header from 'components/Header';

const reducer = combineReducers({
  todo: todo.reducer,
});

const store = configureStore({
  reducer: reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
