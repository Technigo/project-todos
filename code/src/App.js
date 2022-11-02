import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import TaskList from 'components/TaskList';
import todos from 'reducers/todos'
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({
  // reducer: reducers
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
    </Provider>
  );
}
