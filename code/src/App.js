import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todos from 'reducers/todos'
import ToDoList from 'components/ToDoList';
import AddToDo from 'components/AddToDo';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <AddToDo />
      <ToDoList />

    </Provider>
  );
}
