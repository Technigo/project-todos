import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from './reducers/tasks';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TaskCounter } from 'components/TaskCounter';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <h1 className='main-title'>Eccentric Tasks</h1>
      <AddTask />
      <TaskCounter />
      <TaskList />
    </Provider>
  );
};
