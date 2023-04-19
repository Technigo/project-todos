import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';
import tasks from 'reducers/tasks';
import NavBar from 'NavBar/NavBar';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <NavBar />
      <div className="container">
        <div className="list-box">
          <TaskList />
          <AddTask />
        </div>
      </div>
    </Provider>
  );
}

/* control + c för att stoppa servern */