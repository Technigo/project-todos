import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { AddTask } from 'components/AddTask';
import './index.css'

import { TasksList } from 'components/TasksList';

import { tasks } from 'reducers/tasks'
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

const reducer = combineReducers({
  tasks: tasks.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="section-header">
        <Header />
      </div>
      <div className="app-container">
        <TasksList />
        <AddTask />
      </div>
      <div className="section-footer">
        <Footer />
      </div>
    </Provider>
  );
}

