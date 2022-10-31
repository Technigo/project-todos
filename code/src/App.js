/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from 'Globalstyles'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from 'reducers/todos'
import { login } from 'reducers/login'

import { Header } from 'components/Header/Header'
import { TodoList } from 'components/TodoList/TodoList';
import { Footer } from 'components/Footer/Footer'
// import { EmptyList } from 'components/EmptyList/EmptyList';

const reducer = combineReducers({
  todos: todos.reducer,
  login: login.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <TodoList />
      {/* <EmptyList /> */}
      <Footer />
    </Provider>
  );
}
