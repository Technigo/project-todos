import React, { Component } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { todos } from "./reducers/todos";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <MainWrapper>
        <Header />
        <TodoList />
        <Footer />
      </MainWrapper>
    </Provider>
  );
};

const MainWrapper = styled.main`
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  width: 90%;
  /*height: 90%;*/
  min-height: 600px;
  border-radius: 5px;
  margin: 20px auto;
  padding: 5px;
`;
