import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoCountComplete from "components/TodoCountComplete/TodoCountComplete";

// Connect (combine) all of the slices into one group
const reducer = combineReducers({
  todos: todos.reducer,
});

// Create redux store from connected slices
const store = configureStore({ reducer });

export const App = () => {
  return (
    // Pass store into <provider> so every component inside can reach for it
    <div className="container">
    <Provider store={store}>
      <Header />
      <TodoForm />
      <TodoList />
      <TodoCountComplete />
    </Provider>
    </div>
  );
};
