import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos';

import Header from 'components/Header';
import AddTask from 'components/AddTask';
import ToDoList from 'components/ToDoList';

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <ToDoList />
    </Provider>
  );
};
