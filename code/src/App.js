import React from 'react';
import { Header } from './components/Header';
import { AllTasks } from 'components/AllTasks';
import { AddTask } from './components/AddTask';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { tasks } from 'reducers/tasks';
import { ClearButton } from 'components/ClearButton';
import { FridgeSummary } from 'components/FridgeSummary';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <AllTasks />
    </Provider>
  );
};
