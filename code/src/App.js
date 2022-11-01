/* eslint-disable linebreak-style */
import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { ToDoList } from 'components/ToDoList';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <div>
        <ToDoList />
      </div>
    </Provider>

  );
}
