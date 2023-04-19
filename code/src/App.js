import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todo from 'reducers/todo';

import { TodoList } from 'components/TodoList';
import { CompletedItems } from 'components/CompletedItems';
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
      <CompletedItems />
    </Provider>
  )
}
