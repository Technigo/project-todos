import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { Header } from "components/Header";
import { Counter } from "components/Counter";
import { todos } from "reducers/todos";
import { AddToDo } from "components/AddToDo";
import { TodoList } from "components/TodoList";
import styled from "styled-components";

const reducer = combineReducers({
  todos: todos.reducer,
});

// get localstorage as initial state
const persistedStateJSON = localStorage.getItem("todosReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// creates store with inital state
const store = createStore(reducer, persistedState);

// stores the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem("todosReduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <AddToDo />
        <Counter />
        <TodoList />
      </Main>
    </Provider>
  );
};

const Main = styled.div`
  box-sizing: border-box;
  margin: 0 auto 30px;
`;
