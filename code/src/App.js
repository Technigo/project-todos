import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import Board from 'components/Board';
import AddTask from 'components/AddTask'
import TasksCounter from 'components/TasksCounter';
import { BoardInfo } from 'styled-components/Wrappers';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BoardInfo>
        <h1>Fake Trello</h1>
        <AddTask />
        <TasksCounter />
        <Board />
      </BoardInfo>
    </Provider>
  );
}

