import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tasks from './reducers/tasks';
import Header from './compononets/Header';
import TaskList from './compononets/TaskList';
import TaskForm from './compononets/TaskForm';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskForm />
      <TaskList />
    </Provider>
  );
};
