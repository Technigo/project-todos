import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks';
import { ToDo } from './components/ToDo';

// creates a single reducer from slice(s):
const reducer = combineReducers({
  tasks: tasks.reducer
})

// uses the reducer to set up the store:
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
}
