import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

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

// This is the store setup if I don't want to use the local storage
// import configureStore again if I want to use it again
// const store = configureStore({ reducer });

// Setup in order to use local storage to save our to do list and not delete
// everything when refreshing the page - super handy! We create this variable
// persistedStateJSON that will check if we have anything saved in the local
// storage by method getItem, the data for this project is named in the local
// storage as "reduxState". If reduxState is found: we need to parse it and this
// parsed version is assigned to persistedState, which will now work as our
// initial state
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};

// so now we setup the store with the reducer we defined and the persistedState
// as the initial state. The store subscribes to any actions performed on the state
// so that it always stores the most updated data
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

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

// Type localStorage.clear in the console in order to clear the local storage and once more start
// again with our pre-defined initial stata
