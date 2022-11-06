/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'reducers/task';
import AddTask from 'componenets/AddTask';
import TaskList from 'componenets/TaskList';

import { Header } from 'components/Header';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });

  const store = configureStore({
    reducer
  });

  return (
    <><Header />
      <Provider store={store}>
        <TaskList />
        <p> testar o det inte ska vara en rad här</p>
        <AddTask />
        <p> provar något annatS</p>
      </Provider>
    </>
  );
}