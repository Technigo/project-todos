import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

export const App = () => {
  const reducer = combineReducers({
  })
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
<AddTask />
<TaskList />

    </Provider>
  )
}
