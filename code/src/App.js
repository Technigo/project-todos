import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todolist } from 'reducers/todolist';
import { StudiesTasks } from 'components/StudiesTasks';
import { HouseChoreTasks } from 'components/HouseChoreTasks';
import { ShoppingList } from 'components/ShoppingList';
import { OtherTasks } from 'components/OtherTasks';
import { AddToDoInput } from 'components/AddToDoInput';

const reducer = combineReducers({
  todolist: todolist.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <AddToDoInput />
      <section className="lists-container">
        <StudiesTasks />
        <HouseChoreTasks />
        <ShoppingList />
        <OtherTasks />
      </section>
    </Provider>
  );
};

// Add explanatory comments