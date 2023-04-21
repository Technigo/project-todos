import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTODO from 'components/AddTODO';
import TODOList from 'components/TODOList';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';
import VaultList from 'components/VaultList';

export const App = () => {
// in the combine reducers we add our redux store slices
  const reducer = combineReducers({
    tickets: tickets.reducer,
    vault: vault.reducer
  })

  let preloadedState = {};
  const preloadedStateJSON = localStorage.getItem('reduxState')

  if (preloadedStateJSON) {
    preloadedState = JSON.parse(preloadedStateJSON)
    console.log(preloadedState)
  }
  const store = configureStore({ reducer, preloadedState })

  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })

  return (
    <Provider store={store}>
      <AddTODO />
      <TODOList />
      <VaultList />
    </Provider>
  );
}
