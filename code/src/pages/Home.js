import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TodoList } from "../components/TodoList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { todos } from "reducers/todos";
import styled from "styled-components";
import img from "../image/purty-wood.png";

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

  justify-content: center;

  background: #fdeacb;
`;

const Main = styled.section`
  display: flex;
  align-items: space-evely;
  justify-content: center;

  width: 40vw;
  min-height: 500px;

  padding: 20px;
  margin: auto;

  background: #426452;
  background-image: url(${img});
  background-repeat: repeat;
  background-size: contain;
  border-radius: 10px;
  border: 15px solid #855418;

  box-shadow: inset 0px 1px 10px 10px #22332a;

  @media (max-width: 668px) {
    width: 70vw;
  }
`;
