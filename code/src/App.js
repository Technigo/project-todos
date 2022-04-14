import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import "./App.css";
import tasks from "reducers/todo";
import Counter from "components/Counter";
import Input from "components/input";
import TaskList from "components/todoList";

const reducer = combineReducers({
  task: tasks.reducer,
});

const store = configureStore({
  reducer,
});

//Everything inside the provider has acess to the global store

export const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
      <Counter />
      <Input />
    </Provider>
  );
};
