import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'components/reducers/tasks';
import { Provider } from 'react-redux';
import { TaskList } from 'components/TaskList';
import { NewTask } from 'components/NewTask';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <NewTask />
      <TaskList />
    </Provider>
  );
}
