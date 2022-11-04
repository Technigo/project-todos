import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ToDoList from 'components/ToDoList';
import toDos from 'reducers/toDos';

export const App = () => {
  const reducers = combineReducers({
    toDos: toDos.reducer
  })

  const store = configureStore({
    reducer: reducers
  })
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}
