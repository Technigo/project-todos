import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddToDo, { Wrapper } from 'components.js/AddToDo';
import ToDoList from 'components.js/ToDoList';
import todos from 'reducers.js/todos';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  });
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Wrapper>
        <AddToDo />
        <ToDoList />
      </Wrapper>
    </Provider>
  );
}
