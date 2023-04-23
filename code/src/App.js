import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Header from 'components/Header';

import tasks from 'reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div className="outerWrapper">
        <Header />
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer
