import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Counter from 'components/Counter';
import ClearBtn from 'components/ClearBtn';
import tasks from 'reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <ClearBtn />
      <Counter />
      <AddTask />
      <TaskList />
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer