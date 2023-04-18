import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import pokemons from 'reducers/pokemon';
import tasks from 'reducers/tasks';
import ListPage from 'components/ListPage';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}
