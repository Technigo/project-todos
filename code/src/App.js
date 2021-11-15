import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoData from "reducers/todoData";
import TodoList from "components/TodoList";
import AddTodo from "components/AddTodo";

const reducer = combineReducers({
  todo: todoData
});

const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <main>
      <AddTodo />
      <TodoList />
    </main>
  </Provider>
);
