import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';

import { todos } from '../reducers/todos';

import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';
import { Header } from '../components/Header';
import { TodoSummary } from 'components/TodoSummary';
import { ClearAllButton } from 'components/ClearAllButton';
import { LottieAnimation } from '../components/LottieAnimation';

// StoreCreation: Tell Redux about our reducers. createSlice adds a field called 'reducer'. 
// 'combineReducer()' is a function that takes the todo object as an argument and turn it into a variable
// called reducer to be used when setting up the store.

const reducer = combineReducers({ todos: todos.reducer });


// Old store code: configureStore: Create store to using our reducers and the retrieved state
//const store = configureStore({ reducer });

// Persistence: Tell the store to persist the state in localstorage after every action
// New store code:
// 1. Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};
  
// 2. Create the store using the initial state, Checks for the devtools extension - if there, give access to browser.
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// 3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
      <Provider store={store}>
        <Header />
        <TodoSummary />
        <TodoInput />
        <TodoList />
        <ClearAllButton />
        <LottieAnimation />
      </Provider>    
  );
};

/*
PLAN
- create TodoInput
- create Store
- use Provider
- create TodoList
- create TodoItem
- create Summary
*/

