import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";

import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
      <AddTask />
    </Provider>
  );
};
