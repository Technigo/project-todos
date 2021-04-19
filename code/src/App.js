import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import tasks from './reducers/tasks';

import ToDoList from './components/ToDoList';
import Header from './components/Header';
import TaskCreator from './components/TaskCreator';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer});


export const App = () => {
  return (
    <Provider store= {store}>
      <Header/>
      <TaskCreator/>
      <ToDoList/>
    </Provider>
  )
};
