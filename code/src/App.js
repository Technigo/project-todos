/* eslint-disable comma-dangle */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import ToDoList from 'components/ToDoList';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer,
  });

  const store = configureStore({
    // reducer: reducers
    reducer,
  });

  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
};
