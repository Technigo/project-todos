/* eslint-disable comma-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tasks from 'reducers/tasks';
import { Header } from 'components/Header';
import TaskList from 'components/TaskList';
import TaskInput from 'components/TaskInput';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
  });

  const store = configureStore({
    reducer,
  });

  return (
    <Provider store={store}>
      <Header />
      <TaskInput />
      <TaskList />
    </Provider>
  );
};
