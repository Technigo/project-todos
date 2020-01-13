import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "reducers/tasks";

import { TaskList } from "./components/TaskList";
import { Date } from "components/Date";
import { Header } from "components/Header";

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Date />
      <TaskList />
    </Provider>
  );
};
