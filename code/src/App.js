import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todo } from "reducers/todo";
import { screen } from "reducers/screen";
import { Main } from "components/Main";

const reducer = combineReducers({
  todo: todo.reducer,
  screen: screen.reducer,
});

const store = configureStore({ reducer, screen });

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
