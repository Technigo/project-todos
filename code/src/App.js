import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { todos } from "./reducer/todos";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { StatusBar } from "components/StatusBar";

const reducer = combineReducers({ todos: todos.reducer });

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <StatusBar />
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
