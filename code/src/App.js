import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { tasks } from "./reducers/tasks";

import { TaskContent } from "./components/TaskContent";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <TaskContent />
    </Provider>
  );
};
//reference for persisted state in Redux: https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
