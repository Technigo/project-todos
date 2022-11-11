/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/task';
import TaskList from 'componenets/TaskList';
import Header from 'componenets/Header';
import Main from 'componenets/Main';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <Provider store={store}>
      <Main />
      <Header />
      <TaskList />
    </Provider>
  );
}

