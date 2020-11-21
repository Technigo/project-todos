import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todolist } from 'reducers/todolist';
import { StudiesTasks } from 'components/StudiesTasks';
import { HouseChoreTasks } from 'components/HouseChoreTasks';
import { ShoppingList } from 'components/ShoppingList';
import { OtherTasks } from 'components/OtherTasks';

const reducer = combineReducers({
  todolist: todolist.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StudiesTasks />
      <HouseChoreTasks />
      <ShoppingList />
      <OtherTasks />
    </Provider>
  );
};

// Fix favicon
