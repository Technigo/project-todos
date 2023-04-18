import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddToDo from 'components/AddToDo';
import ToDoList from 'components/ToDoList';
import todos from 'redux/reducers/todos'

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <AddToDo />
      <ToDoList />
    </Provider>
  )
}

// ctrl + c inside the terminal to stop the liveServer