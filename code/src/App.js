import React from 'react';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

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

const MainBox = styled.main`
  background-color: rgb(0, 187, 249);
`;

export const App = () => {
  return (
    <Provider store={store}>
      <MainBox>
        <Header />
        <TaskCounter />
        <TasksList />
        <ClearAllTask />
      </MainBox>
    </Provider>
  );
};
