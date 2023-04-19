import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todo from 'reducers/todo';
import { TodoCounter } from 'components/TodoCounter';
import { TodoList } from 'components/TodoList';
import Header from 'components/Header';
import AddTodo from 'components/AddTodo';

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
      <TodoCounter />
    </Provider>
  )
}
