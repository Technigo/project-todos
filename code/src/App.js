import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import TODOList from 'components/TODOList';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';
import VaultList from 'components/VaultList';
import Header from 'components/Header';
import ClearList from 'components/ClearList';
import AddTODO from 'components/AddTODO';

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
      <div id="wrapperDiv">
        <Header />
        <TODOList />
        <AddTODO />
        <footer>
          <ClearList />
          <VaultList />
        </footer>
      </div>
    </Provider>
  );
}
