import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
// import TaskForm from 'components/TodoForm';
import { TaskList } from './TaskList';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const Main = () => {
  return (
    <Provider store={store}>
      {/* <TaskForm /> */}
      <TaskList />
    </Provider>
  )
}