import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toDos from 'reducers/toDos';
import ToDoList from 'components/ToDoList'
import { ToDoItem } from 'components/ToDoItem';

export const App = () => {
  const reducer = combineReducers({
    toDos: toDos.reducer
  });
  const store = configureStore({
    // reducer: reducer
    reducer
  });
  return (
    <Provider store={store}>
      <ToDoItem />
      <ToDoList />
    </Provider>
  );
}
