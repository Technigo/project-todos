import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { TodoApp } from 'components/TodoApp';
import { GlobalStyle } from 'components/styled_components/globalStyles';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TodoApp />
    </Provider>
  );
}
