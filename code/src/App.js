import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components/macro";

import { todos } from "./reducers/todos";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
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
  min-height: 93vh;
  border-radius: 5px;
  margin: 20px auto;
  padding: 5px;
  max-width: 500px;

  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 40%;
    max-width: 450px;
  }
`;
