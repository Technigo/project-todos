import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import items from 'reducers/Item';
import GroceryList from 'components/GroceryList';
import AddItem from 'components/AddItem';

export const App = () => {
  const reducer = combineReducers({
    items: items.reducer
  });

  const store = configureStore({
    reducer
  });
  return (
    <Provider store={store}>
      <GroceryList />
      <AddItem />
    </Provider>

  );
}
