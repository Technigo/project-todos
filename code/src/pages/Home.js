import React from "react";
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
//import { TodoList } from "../components/TodoList.js";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "../reducers/todos.js";
import { TodoList } from "components/TodoList.js";

/*
 PLAN 
  - create TodoInput
  - create store
  - use Provider
  - create TodoList
  - create TodoItem
  - create TodoSummary
*/

// StoreCreation : Tell redux about our reducers
const reducer = combineReducers({ todos: todos.reducer })
// Persistence: Retrieve the existing state from localstorage if it exists

// StoreCreation: Create the store using our reducers and the retrieved state
const store = configureStore({ reducer })
// Persistence: Tell the store to persist the state in localstorage after every action

export const Home = () => {
    return (
        <Provider store={store}>
            <main>       
             <TodoList></TodoList>
            </main>
        </Provider>
    )
};