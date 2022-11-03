import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import TaskList from 'components/TaskList';
import todos from 'reducers/todos'
import AddTask from 'components/AddTask'
import Header from 'components/Header'
import Footer from 'components/Footer';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </Provider>
  );
}
