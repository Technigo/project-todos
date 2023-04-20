import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AddTask } from 'Components/AddTask';
import { TaskList } from 'Components/TaskList';
import { Tasks } from 'Reducers/Tasks';
import { Footer } from 'Components/Footer';
import 'App.css';

export const App = () => {
  const reducer = combineReducers({
    tasks: Tasks.reducer
  });
  const store = configureStore({ reducer });
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-task">
          <Provider store={store}>
            <AddTask />
            <TaskList />
            <Footer />
          </Provider>
        </div>
      </div>
    </div>
  )
}

// ctrl + c inside the terminal to stop the liveServer
