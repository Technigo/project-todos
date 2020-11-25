import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { Bottom } from './components/Bottom';

import { todos } from './reducers/todos';

const reducer = combineReducers({
  todos: todos.reducer
});

const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <Header />
    <Tasks />
    <Bottom />
  </Provider>
)
