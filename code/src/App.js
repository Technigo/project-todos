import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import Tasklist from 'components/Tasklist';
import Hero from 'components/Hero';
import Input from 'components/Input';
import tasks from './reducers/tasks';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Hero />
      <Input />
      <Tasklist />
    </Provider>
  );
};
