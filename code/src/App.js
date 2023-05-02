import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import styled from 'styled-components';
import Header from './components/Header';
import ToDo from './components/ToDo';
// import image from './assets/forest.jpg';

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