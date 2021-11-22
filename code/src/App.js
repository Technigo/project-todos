import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";
import Header from "./components/Header";
import Counter from "./components/Counter";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

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
    <section className="container">
      <Provider store={store}>
        <Header />
        <Counter />
        <AddTodo />
        <TodoList />
      </Provider>
    </section>
  );
};
