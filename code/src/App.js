import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Header } from "components/Header";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

// förbertt alla slices har
const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({
  reducer: reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoList />
    </Provider>
  );
};
