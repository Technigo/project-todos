import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import tasks from "reducers/Tasks";
import TaskList from "components/TaskList";
import AddTask from "components/AddTasks";
import TodoCounter from "components/Counter";
import Header from "components/Header";

// This code is for the slices(pockets)
const reducer = combineReducers({
  tasks: tasks.reducer,
});

// This is for the bag
const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <Provider store={store}>
        <AddTask />
        <Header />
        <TaskList />
        <TodoCounter />
      </Provider>
    </div>

  );
};
