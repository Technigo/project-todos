import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import clothes from 'reducers/tasks';
import AddClothes from 'components/AddTask';
import ClothesList from 'components/TaskList';

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
