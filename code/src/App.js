import { configureStore, combineReducers } from '@reduxjs/toolkit';
import React from 'react';
import GlobalStyling from 'Styling/GlobalStyling';
import { Provider } from 'react-redux';
import { Completed } from 'components/Completed';
import { Uncompleted } from 'components/Uncompleted';
import uncompleted from 'reducers/uncompleted';
import completed from 'reducers/completed';

const reducer = combineReducers({
  completed: completed.reducer,
  uncompleted: uncompleted.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyling />
      <Uncompleted />
      <Completed />
    </Provider>
  );
}
