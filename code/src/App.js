import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";
import styled from "styled-components";

const reducer = combineReducers({
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
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

//Stlyed component
const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  padding-bottom: 50px;

  @media (min-width: 600px) {
    margin: 0 auto;
    max-width: 500px;
  }
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <AddTodo />
        <TodoList />
      </Main>
    </Provider>
  );
};
