import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from 'reducers/todos'
/* import TaskList from 'components/TaskList';
import AddTask from 'components/AddTask'
import Header from 'components/Header'
import Footer from 'components/Footer'; */
import TodoApp from 'components/TodoApp'

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({
  reducer
});

export const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
