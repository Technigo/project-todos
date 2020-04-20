import React from "react";
import { Provider } from "react-redux";
import { TodoList } from "../components/TodoList.js";
import { createStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "../reducers/todos.js";
import { Header } from "components/Header"

// Tell redux about our reducers
const reducer = combineReducers({ todos: todos.reducer });

// // Retrieve the existing state from localstorage if it exists
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

// Create the store using our reducers and the retrieved state
const store = createStore(reducer, persistedState);

// Tell the store to persist the state in localstorage after every action
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <header>
          <Header />
        </header>
        <TodoList></TodoList>
      </main>
    </Provider>
  );
};