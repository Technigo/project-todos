import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import todos from "./reducers/todos";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";
import Header from "components/Header";
import CompletedTodos from "components/CompletedTodos";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Always the same
const reducer = combineReducers({
  // by convention it is always called reducer and we always use the same method to combine slices
  todos: todos.reducer, //slice
});

// retrieve localstorage as inital state
const todoStorageJSON = localStorage.getItem("todos");
let todoStorage = {};

if (todoStorageJSON) {
  todoStorage = JSON.parse(todoStorageJSON);
}

// create store with inital state
const store = createStore(reducer, todoStorage); // ({ reducer: reducer }) 1-property that configure store expects from us, built in name. 2- the variable we created. ES6 shortage syntax

// store the state in localstorage on redux state change
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <MainContainer>
        <AddTodo />
        <TodoList />
        <CompletedTodos />
        <TodoCount />
      </MainContainer>
    </Provider>
  );
};
