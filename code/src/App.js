import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AddTODO from 'components/AddTODO';
import TODOList from 'components/TODOList';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';

export const App = () => {
// in the combine reducers we add our redux store slices
  const reducer = combineReducers({
    tickets: tickets.reducer,
    vault: vault.reducer
  })
  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <AddTODO />
      <TODOList />
    </Provider>
  );
}
