import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todos from "./reducers/todos";
import TodoList from "./components/TodoList";

// Connect (combine) all of the slices into one group
const reducer = combineReducers({
  todos: todos.reducer,
});

// Create redux store from connected slices
const store = configureStore({ reducer });

export const App = () => {
  return (
    // Pass store into <provider> so every component inside can reach for it
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};
