import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TodoList } from 'components/TodoList';
import { todos } from 'reducers/todo';

import { GlobalStyle, StyledHeader } from 'components/GlobalStyle';
import header from './assets/header.png';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StyledHeader src={header} alt="header" />
      <GlobalStyle />
      <TodoList />
    </Provider>
  );
};
