import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { Header } from 'components/Header';
import { TaskList } from 'components/TaskList';
//import { Task } from 'components/Task';
import { AddTask } from 'components/AddTask';
import { Footer } from 'components/Footer';

import { tasks } from 'reducers/tasks';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <div>
      <Header />
      <Provider store={store}>
        <AddTask /> 
        <TaskList />
      </Provider>
      <Footer />
    </div>
  );
};
