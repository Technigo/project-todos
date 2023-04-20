import { configureStore, combineReducers } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import uncompleted from 'reducers/uncompleted';
import completed from 'reducers/completed';
import { Tasklist } from 'components/Tasklist';

const reducer = combineReducers({
  completed: completed.reducer,
  uncompleted: uncompleted.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Tasklist />
    </Provider>
  );
}
