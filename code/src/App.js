import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Input from "components/input";
import "./App.css";

//combineReducers for the pockets and configureStore for the backpack
import task from "reducers/todo";

import TaskList from "components/todoList";

//One of the pocket in the backpack
const reducer = combineReducers({
  task: task.reducer,
});

// Inject the pocket in to the backpack
const store = configureStore({
  reducer,
});

//to put the backpack on someones back
//everything inside the provider has acess to the global store
//to acess data from the global store it needs to be inside of the Provider
export const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
      <Input />
    </Provider>
  );
};
