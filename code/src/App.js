import React from 'react';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}
