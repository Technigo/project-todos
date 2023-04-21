// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AddTask } from 'Components/AddTask';
import { TaskList } from 'Components/TaskList';
import { Tasks } from 'Reducers/Tasks';
import { Footer } from 'Components/Footer';
import { Contact } from 'Components/Contact';
import 'App.css';

// /////////////// COMPONENT //////////////////////// //

export const App = () => {
  const reducer = combineReducers({
    tasks: Tasks.reducer
  });
  const store = configureStore({ reducer });

  // /////////////// OUTCOME //////////////////////// //

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-container-task">
          <Provider store={store}>
            <AddTask />
            <TaskList />
            <Footer />
            <Contact />
          </Provider>
        </div>
      </div>
    </div>
  )
}