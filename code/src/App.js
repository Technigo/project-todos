import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';
import tasks from 'reducers/tasks';
import Header from 'components/Header/Header';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <TaskList />
        <AddTask />
      </div>
    </Provider>
  );
}

/* control + c för att stoppa servern */