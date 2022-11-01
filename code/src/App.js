import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Card from 'components/Card';
import { GlobalStyle } from 'styles/GlobalStyle';
import tasks from 'reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Card />
    </Provider>
  );
};
