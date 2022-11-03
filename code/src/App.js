import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import cat from 'reducers/cat';
import { Provider } from 'react-redux';
import OuterWrapper from 'components/OuterWrapper';

const reducer = combineReducers({
  tasks: tasks.reducer,
  cat: cat.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper />
    </Provider>
  );
};
