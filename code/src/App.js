import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from './reducers/tasks';

import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import { TaskCounter } from './components/TaskCounter/TaskCounter';
import { Footer } from './components/Footer/Footer';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <h1 className='main-title'>Eccentric Tasks</h1>
      <AddTask />
      <TaskCounter />
      <TaskList />
      <Footer />
    </Provider>
  );
};
