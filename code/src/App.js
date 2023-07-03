import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Counter from 'components/Counter';
import tasks from 'reducers/tasks';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-container-task">
          <Provider store={store}>
            <h1>To-Do List</h1>
            <Counter />
            <AddTask />
            <TaskList />
          </Provider>
        </div>
      </div>
    </div>
  )
}
