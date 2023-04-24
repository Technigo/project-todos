import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasks from 'components/reducers/tasks';
import AddTask from 'components/AddTask';
import TaskList from 'components/TaskList';
import Header from 'components/Header';
import Footer from 'components/Footer';

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </Provider>
  )
}
