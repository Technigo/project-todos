import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todos from 'reducers/todo';
import { TodoList } from 'components/TodoList';
import Header from 'components/Header';

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
    </Provider>
  )
}
