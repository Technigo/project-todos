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
  const reducer = combineReducers({ // Here we combine all reducers
    tasks: Tasks.reducer
  });
  const store = configureStore({ reducer });

  // /////////////// OUTCOME //////////////////////// //

  // The site with all the components will be rendered

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