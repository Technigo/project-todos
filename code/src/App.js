import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { Header } from 'components/Header';
import { Counter } from 'components/Counter';
import { AddTaskForm } from 'components/AddTaskForm';
import { TaskList } from 'components/TaskList';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <AddTaskForm />
      <TaskList />
    </Provider>
  );
}
