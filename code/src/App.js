import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { TodoList } from './Components/TodoList';
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';

import { todo } from './reducers/todo';

const reducer = combineReducers({
  todo: todo.reducers
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
      <Footer />
    </Provider>
  );
};
