import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer });

const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const createdStore = createStore(reducer, persistedState);

createdStore.subscribe(() => {
  localStorage.setItem(
    "todosReduxState",
    JSON.stringify(createdStore.getState())
  );
});

export const App = () => {
  return (
    <>
      <Provider store={(store, createdStore)}>
        <Header />
        <TodoList />
        <AddTodo />
      </Provider>
    </>
  );
};
