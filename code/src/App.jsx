import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Tasks from 'reducers/Task';

export const App = () => {
  const reducer = combineReducers({
    tasks: Tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
    </Provider>
  );
}
