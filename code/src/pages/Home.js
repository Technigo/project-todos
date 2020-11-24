import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { todos } from '../reducers/todos';

import { TodoList } from '../components/TodoList';
import { TodoInput } from '../components/TodoInput';
import { Header } from '../components/Header';
import { TodoSummary } from 'components/TodoSummary';
import { ClearAllButton } from 'components/ClearAllButton';

// StoreCreation: Tell Redux about our reducers. createSlice adds a field called 'reducer'. 
// 'combineReducer()' is a function that takes the todo object as an argument and turn it into a variable
// called reducer to be used when setting up the store.
// Old store code:
const reducer = combineReducers({ todos: todos.reducer });


// configureStore: Create store to using our reducers and the retrieved state
const store = configureStore({ reducer });

// Persistence: Tell the store to persist the state in localstorage after every action
// New store code:
// 1. Retrieve the localstorage and use it as our initial state
// 2. Create the store using the initial state
// 3. Store the state in localstorage on ANY redux state change

export const Home = () => {
  return (
    <main>
      <Provider store={store}>
        <Header />
        <TodoSummary />
        <TodoInput />
        <TodoList />
        <ClearAllButton />
      </Provider>
    </main>
    
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

