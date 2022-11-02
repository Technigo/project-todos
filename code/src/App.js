import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import Board from 'components/Board';
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
      <Board />
    </Provider>
  );
}
