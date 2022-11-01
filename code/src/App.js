import React from 'react';
import tasks from 'reducers/tasks';
import Tasks from 'components/Tasklist';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Tasks />
    </Provider>
  );
}
