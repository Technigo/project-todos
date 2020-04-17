import React from "react";
import { Provider } from "react-redux";
import { createStore, configureStore, combineReducers } from "@reduxjs/toolkit";
import { TodoList } from "../components/TodoList";
import { todos } from "reducers/todos";

export const Home = () => {
  const reducer = combineReducers({ todos: todos.reducer });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>
  );
};
