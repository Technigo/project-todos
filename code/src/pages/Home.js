import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TodoList } from "../components/TodoList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { todos } from "reducers/todos";
import styled from "styled-components";

export const Home = () => {
  const reducer = combineReducers({ todos: todos.reducer });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Site>
        <Header />
        <Main>
          <TodoList />
        </Main>
        <Footer />
      </Site>
    </Provider>
  );
};

const Site = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  background: #fdeacb;
`;

const Main = styled.section`
  display: flex;
  align-items: space-evely;
  justify-content: center;

  width: 40vw;

  flex: 1;

  padding: 20px;
  margin: auto;

  background: #426452;
  border-radius: 10px;
`;
