import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled, { createGlobalStyle } from "styled-components";

import todos from "./reducers/todos";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(236, 229, 255);
  }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "rubik";
`;

// by convention always called reducer
const reducer = combineReducers({
  // all the slices are specified here
  todos: todos.reducer,
});

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem(
    "todosReduxState",
    JSON.stringify(store.getState())
  );
});

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <AddTodo />
        <TodoList />
      </Wrapper>
    </Provider>
  );
};
