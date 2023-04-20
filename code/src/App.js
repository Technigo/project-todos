import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TodoList } from 'components/TodoList';
import { tasks } from 'reducers/tasks';

import { GlobalStyle, StyledHeader } from 'components/GlobalStyle';
import header from './assets/header.png';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StyledHeader src={header} alt="header" />
      <GlobalStyle />
      <TodoList />
    </Provider>
  );
};
