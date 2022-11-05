import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
/* import { Header } from 'components/Header'; */
import { AddTask } from 'components/AddTask';
/* import { TaskList } from 'components/TaskList'; */
import { todos } from 'reducers/todos';

export const App = () => {
  const reducer = combineReducers({
    tasks: todos.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <AddTask />
    </Provider>
  );
}