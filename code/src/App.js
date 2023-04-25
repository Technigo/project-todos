import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Header from './components/Header'
import ToDo from './components/ToDo'

import todos from './reducers/list'

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
      <ToDo />
    </Provider>
  )
};