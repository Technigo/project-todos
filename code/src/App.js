import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Input } from 'components/Input';
import todoSlice from './reducers/todoSlice';

import './App.css';

const reducer = combineReducers({
  todoSlice: todoSlice
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
        {/* Todolist */}
        {/* done */}
        <Input />
      </main>
    </Provider>
  );
};
