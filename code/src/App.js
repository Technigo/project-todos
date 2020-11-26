import React, { Component } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { todos } from "./reducers/todos";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <MainContainer>
        <Header />
        <TodoList />
        <AddTodo />
      </MainContainer>
    </Provider>
  );
};

const MainContainer = styled.div`
  background: #fff;
  width: 90%;
  border-radius: 5px;
  margin: 10px auto;
  /*padding: 5px 5px 80px 5px;*/
`;
