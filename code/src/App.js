import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";
import GlobalStyle from "globalStyle";
import moment from "moment";

import todos from "./reducers/store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoCount from "./components/TodoCount";
import Header from "components/Header";

const MainSection = styled.main`
  max-width: 800px;
  margin-left: auto;
  margin-right: 10vw;
  padding-left: 10vw;
`;

const MainSubsection = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const DateSection = styled.div`
  span {
    font-size: 12px;
    font-weight: 300;
  }
`;

const reducer = combineReducers({
  todos: todos.reducer, //slice
});

const todoStorageJSON = localStorage.getItem("todos");
let todoStorage = {};

if (todoStorageJSON) {
  todoStorage = JSON.parse(todoStorageJSON);
}

const store = createStore(reducer, todoStorage);

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <Header />
        <MainSection>
          <DateSection>
            <h3>{moment().format("ddd D MMM")}</h3>
          </DateSection>
          <MainSubsection>
            <AddTodo />
            <TodoList />
            <TodoCount />
          </MainSubsection>
        </MainSection>
      </>
    </Provider>
  );
};
