import React from 'react';
import { Provider } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers1/todos';
import { TodosList } from './components/TodosList'

const reducer = combineReducers({ todos: todos.reducer , });
const store = configureStore({ reducer });
export const App = () => {
  return (
    <Provider store={store}>
      <TodosList></TodosList>
    </Provider>
  );
};
