import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import tasks from "reducers/tasks";

import Header from "components/Header";
import TaskList from "components/TaskList";
import TaskCounter from "components/TaskCounter";
import AddNewTask from "components/AddNewTask";
import { GlobalStyle } from "styles";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <TaskList />
        <TaskCounter />
        <AddNewTask />
      </Provider>
    </>
  );
};
