import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

import AddTask from "components/AddTask";
import todos from "./reducers/todos";
import TodoList from "./components/TodoList";

import { loadState, saveState } from "./reducers/localStorage";

const persistedState = loadState();

const reducer = combineReducers({
  todos: todos.reducer
});

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
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
