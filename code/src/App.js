import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import clothes from 'reducers/clothes';
import AddClothes from 'components/AddClothes';
import ClothesList from 'components/ClothesList';

export const App = () => {
  const reducer = combineReducers({
    clothes: clothes.reducers
  })
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <AddClothes />
      <ClothesList />

    </Provider>
  )
}
