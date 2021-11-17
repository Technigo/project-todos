import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import todos from "./reducers/todos";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(236, 229, 255);
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
const store = createStore(reducer, persistedState);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem(
    "todosReduxState",
    JSON.stringify(store.getState())
  );
  console.log(JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <AddTodo />
        <TodoList />
      </Wrapper>
    </Provider>
  );
};
