import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tasks from 'reducers/tasks';
import Main from 'components/Main';

export const App = () => {
  const reducer = combineReducers({
    tasks: tasks.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
