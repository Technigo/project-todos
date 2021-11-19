import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const reducer = combineReducers({
  todos: todos.reducer,
});

//retrieve localstorage as initial state
const preloadedStateJSON = localStorage.getItem("todosReduxState");
let preloadedState = {};

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON);
}

//create store with initial state
const store = configureStore({ reducer, preloadedState });

//store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
