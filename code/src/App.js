import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import TaskTracker from 'components/TaskTracker';
import ToggleCompleteBtn from 'components/ToggleCompleteBtn';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
      <TaskTracker />
      <ToggleCompleteBtn />
    </Provider>
  );
}
