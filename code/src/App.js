import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todolist } from 'reducers/todolist';
import { StudiesTasks } from 'components/StudiesTasks';
import { HouseChoreTasks } from 'components/HouseChoreTasks';
import { ShoppingList } from 'components/ShoppingList';
import { OtherTasks } from 'components/OtherTasks';
import { AddToDoInput } from 'components/AddToDoInput';
import { Header } from 'components/Header';

// I have set up one main reducer with an initial state and actions
// Here I create variables for accessing the reducer data and
// another one to connect the store to that reducer variable
const reducer = combineReducers({
  todolist: todolist.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    // The store that I configured in the steps above is then set as
    // an attribute in the Provider component, so all components that
    // are called within this provider will have access to the data
    // in the store
    <Provider store={store}>
      <Header />
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
