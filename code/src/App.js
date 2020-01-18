import React from "react";
import { tasks } from "reducers/tasks";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { AddTaskForm } from "components/AddTaskForm";
import { TaskList } from "components/TaskList";
import { Header } from "components/Header";
import { EmptyList } from "components/EmptyList";

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTaskForm />
      <TaskList />
      <EmptyList />
    </Provider>
  );
};
