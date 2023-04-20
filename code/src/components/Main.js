import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/task';
import TaskList from './TaskList';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const Main = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  )
}