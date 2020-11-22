import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Tasks } from 'reducer/Tasks';
import { TaskList } from 'componenets/TaskList';

const reducer = combineReducers({
  tasks: Tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  )
};
