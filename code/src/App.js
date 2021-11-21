import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { Header } from "components/Header";

import todos from "./reducers/todos";

import GlobalStyle from "components/GlobalStyleing";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Counter from "components/Counter";

const reducer = combineReducers({
  todos: todos.reducer,
});

const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Counter />
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
