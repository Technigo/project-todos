import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Header from 'components/Header.js';
import TodoAdd from './components/TodoAdd.js';
import TodoList from './components/TodoList.js';
import todos from 'reducers/todos';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({
  reducer: reducer
});


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoAdd />
      <TodoList />
    </Provider>
  )
}
