/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todos } from './reducers/todos';
import { AddTodo } from './components/AddTodo'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
    </Provider>
  );
}
