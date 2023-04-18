import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask';
import todolist from 'reducers/todolist';

export const App = () => {
  const reducer = combineReducers({
    todolist: todolist.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddTask />
      <TaskList />
    </Provider>
  );
}
