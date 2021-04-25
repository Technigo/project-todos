import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "../src/reducers/localStorage";

import todos from "./reducers/todos";
import TodoList from "./components/TodoList";
import AddTask from "components/AddTask";

const persistedState = loadState();

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTask />
    </Provider>
  );
};
