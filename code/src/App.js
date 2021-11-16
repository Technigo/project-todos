import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { debounce } from "debounce";
import { loadState, saveState } from "./localStorage";

import todos from "./reducers/todos";

// components
import { Structure } from "Structure";

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer, preloadedState: loadState() });

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  })
);

export const App = () => {
  return (
    <Provider store={store}>
      <Structure />
    </Provider>
  );
};
