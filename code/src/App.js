import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  tasks: tasks.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return <Provider store={store}>Find me in src/app.js!</Provider>;
};
