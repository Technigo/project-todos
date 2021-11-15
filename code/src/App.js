import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todo from "./reducers/todo";

// Mounted Components
import Header from "./components/Header";
import TodoList from "components/TodoList";
import AddTask from "components/AddTask";

export const App = () => {
  const reducer = combineReducers({
    todo: todo.reducer,
  });

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <TodoList />
    </Provider>
  );
};
