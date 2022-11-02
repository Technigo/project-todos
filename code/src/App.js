/* eslint-disable linebreak-style */
import React from 'react';
import { GlobalStyles } from 'Globalstyles'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todos } from 'reducers/todos'

import { Header } from 'components/Header/Header'
import { TodoList } from 'components/TodoList/TodoList';

const reducer = combineReducers({
  todos: todos.reducer
});

let preloadedState = {};
const preloadedStateJSON = localStorage.getItem('reduxState')

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON)
}

const store = configureStore({ reducer, preloadedState })

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <TodoList />
    </Provider>
  );
}
