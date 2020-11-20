import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todolist } from 'reducers/todolist';
import { StudiesTasks } from 'components/StudiesTasks';

const reducer = combineReducers({
  todolist: todolist.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StudiesTasks />
    </Provider>
  );
};
