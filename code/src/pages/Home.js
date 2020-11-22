import React from 'react';
import { Provider } from 'react-redux';
import { TodoList } from '../components/TodoList.js';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todos } from '../reducers/todos.js';
import { TodoInput } from '../components/TodoInput.js';
import { TodoSummary } from 'components/TodoSummary.js';



// StoreCreation: Tell Redux about our reducers. createSlice adds a field called 'reducer'. 
// 'combineReducer()' is a function that takes the todo object as an argument and turn it into a variable
// called reducer to be used when setting up the store.
const reducer = combineReducers({ todos: todos.reducer });

// Persistence: Retrieve the current state from localstorage if it exists

// configureStore: Create store to using our reducers and the retrieved state
const store = configureStore({ reducer });

// Persistence: Tell the store to persist the state in localstorage after every action
export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList />
        <TodoSummary />
      </main>
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

