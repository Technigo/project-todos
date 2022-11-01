import { combineReducers, configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import tasks from 'reducers/task';
import TaskList from 'components/taskList';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      Find me in src/app.js!
      <TaskList />
    </Provider>
  );
}
