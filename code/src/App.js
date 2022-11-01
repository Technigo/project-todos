/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from 'Globalstyles'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos'

import { Header } from 'components/Header/Header'
import { TodoList } from 'components/TodoList/TodoList';
import { Footer } from 'components/Footer/Footer'

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <TodoList />
      <Footer />
    </Provider>
  );
}
