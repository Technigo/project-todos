import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks'
import { AddTask } from 'components/AddTask';
import { TaskList } from 'components/TaskList';
import { Counter } from 'components/Counter';
import { Header } from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <AddTask />
      <TaskList />
    </Provider>
  );
}

// ctrl + c to stop the liveserver
// Provider allow the app to access the redux store