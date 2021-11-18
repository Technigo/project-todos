import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";

//Always the same
const reducer = combineReducers({
  // by convention it is always called reducer and we always use the same method to combine slices
  todos: todos.reducer, //slice
});

// retrieve localstorage as inital state
const todoStorageJSON = localStorage.getItem("todos");
let todoStorage = {};

if (todoStorageJSON) {
  todoStorage = JSON.parse(todoStorageJSON);
}

// create store with initial state
const store = createStore(reducer, todoStorage); // ({ reducer: reducer }) 1-property that configure store expects from us, built in name. 2- the variable we created. ES6 shortage syntax

//store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
      <TodoCount />
    </Provider>
  );
};
