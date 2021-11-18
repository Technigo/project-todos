import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import tasks from './reducers/tasks';
import TasksList from 'components/TasksList';
import Header from 'components/Header';
import TaskCounter from 'components/TaskCounter';
import ClearAllTask from 'components/CompleteTaskList';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const persistedStateJSON = localStorage.getItem('todosReduxState');
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(reducer, persistedState);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskCounter />
      <TasksList />
      <ClearAllTask />
    </Provider>
  );
};
