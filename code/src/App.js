import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/taskListSlice';
import TaskList from 'components/TaskList';
import Header from 'components/Header';
import AddTask from 'components/AddTask';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
    </Provider>
  );
}