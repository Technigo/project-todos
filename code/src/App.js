import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from './reducer/tasks';
import { TaskList } from './components/TaskList';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
        Your components can be mounted here, inside the Provider
    </Provider>
  );
}