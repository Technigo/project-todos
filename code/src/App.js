import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import tasks from "./reducers/tasks";
import Wrapper from "components/Wrapper";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

// -- add local storage

const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(
  reducer,
  persistedState,
  // -- to make the redux devtools work
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};
