import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Header } from "components/Header";
import { Counter } from "components/Counter";
import { todos } from "reducers/todos";
import { AddToDo } from "components/AddToDo";
import { TodoList } from "components/TodoList";
import { Footer } from "components/Footer";

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Counter />
      <AddToDo />
      <TodoList />
      <Footer />
    </Provider>
  );
};
