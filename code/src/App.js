import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';

export const App = () => {
  const reducer = combineReducers({
    todos: undefined
  });

  const store = configureStore({ reducer });

  return (

    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  )
}
