import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Input } from 'components/Input';
import todoSlice from './reducers/todoSlice';
import { TodoList } from 'components/TodoList';

import './App.css';

const reducer = combineReducers({
  todoSlice: todoSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
        <TodoList />
        <Input />
      </main>
    </Provider>
  );
};
