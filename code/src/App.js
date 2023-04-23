import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';
import tasks from 'reducers/tasks';
import Header from 'components/Header/Header';
import TotalCompleteItems from 'components/TotalCompleteTasks/TasksCompleted';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <div className="main-container">
        <div className="particle-background">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
        <TotalCompleteItems />
        <Header />
        <TaskList />
        <AddTask />
      </div>
    </Provider>
  );
}

/* control + c för att stoppa servern */