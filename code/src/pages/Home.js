import React from 'react';
import { Provider } from 'react-redux';
import { TodoList } from '../components/TodoList';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import { todos } from '../reducers/todos';

const reducer = combineReducers({ todos: todos.reducer });
const store = createStore(reducer);

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList />
      </main>
    </Provider>
  )
};