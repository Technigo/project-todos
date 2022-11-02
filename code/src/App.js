import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toDos from 'reducers/todo';
import AddNew from 'components/AddNew';
import List from './components/List';

export const App = () => {
  const reducer = combineReducers({
    toDos: toDos.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <List />
      <AddNew />
    </Provider>
  );
};
