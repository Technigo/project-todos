import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AddToDo from 'components/AddToDo';
import ToDo from 'components/ToDo';
import Counter from 'components/Counter';
import Header from 'components/Header';

import todos from './reducers/list';

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer
  })

  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <Header />
      <AddToDo />
      <ToDo />
      <Counter />
    </Provider>
  )
};