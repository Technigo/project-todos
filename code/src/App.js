/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AddDailies } from 'components/AddDailies';
import { Dailieslist } from 'components/DailiesList';
import { dailies } from 'reducers/dailies';
import { Counter } from 'components/Counter';

export const App = () => {
  const reducer = combineReducers({
    dailies: dailies.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <Counter />
      <AddDailies />
      <Dailieslist />
    </Provider>
  );
}
