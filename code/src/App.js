import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { AddTask } from 'components/AddTask';

import { TasksList } from 'components/TasksList';

import { tasks } from 'reducers/tasks'

const reducer = combineReducers({
  tasks: tasks.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TasksList />
      <AddTask />
    </Provider>
  );
}

