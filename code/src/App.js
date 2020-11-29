import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoSummary } from "./components/TodoSummary";
import { todos } from "./reducers/todos";

// Here we combine all the reducers with key and a value
const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    // Everything wrapped in the provider will have axess to the Redux global store
    <Provider store={store}>
      <main>
        <TodoSummary />
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  );
};
