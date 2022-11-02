import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask'

import tasks from 'reducers/tasks';

export const ToDoWrapper = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    // reducer: reducer
    reducer
  });

  return (
    <Provider store={store}>
      <Header />
      <TaskList />
      <AddTask />
    </Provider>
  );
}