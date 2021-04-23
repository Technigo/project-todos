import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";

import { ToDoList } from "./components/ToDoList";
import { TaskInput } from "./components/TaskInput";
import { Header } from "./components/Header";
import { ClearButton } from "components/ClearButton";

const reducer = combineReducers({
  todos: todos.reducer,
});

const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// const store = configureStore({ reducer });

const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className="main">
        <Header />
        <TaskInput />
        <ToDoList />
        <ClearButton />
      </div>
    </Provider>
  );
};
