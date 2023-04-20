/* eslint-disable comma-dangle */
import { ToDoList } from 'components/ToDoList';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { Header } from 'components/Header';
import { AddNewTask } from 'components/AddNewTask';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <AddNewTask />
        <ToDoList />
      </div>
    </Provider>
  );
};
