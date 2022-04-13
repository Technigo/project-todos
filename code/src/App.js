import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Counter from "components/Counter";
// import Counter from "components/Counter";
import Input from "components/Input";
import "./App.css";

//combineReducers for the pockets and configureStore for the backpack
import tasks from "reducers/todo";

import TaskList from "components/TodoList";

//One of the pocket in the backpack
const reducer = combineReducers({
  task: tasks.reducer,
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
      <Counter />
      <Input />
    </Provider>
  );
};
