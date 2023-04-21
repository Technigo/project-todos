import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasks from 'components/reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Header from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
    </Provider>
  )
}
