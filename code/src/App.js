import React from 'react';
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import AddTask from 'components/AddTask';
import Header from 'components/Header';
import todolist from 'reducers/todolist';

export const App = () => {
  const reducer = combineReducers({
    todolist: todolist.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
    </Provider>
  );
}
