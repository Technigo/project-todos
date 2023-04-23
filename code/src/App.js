import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import tasks from 'reducers/task';
import Header from 'components/Header';
import TotalCompleteItems from 'components/TasksCompleted';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  // provide an object as an argument. Names of redux store slices.
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
      <TotalCompleteItems />
    </Provider>
  );
}
