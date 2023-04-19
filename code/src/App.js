/* eslint-disable comma-dangle */
import { ToDo } from 'components/ToDo';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from 'reducers/tasks';
import { Header } from 'components/Header';

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <ToDo />
      </div>
    </Provider>
  );
};
