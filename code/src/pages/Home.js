import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import { TodoList } from "../components/TodoList";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { todos } from "reducers/todos";
import styled from "styled-components";
import img from "../image/chalkboard.png";
import border from "image/wood.png";

export const Home = () => {
  const saveToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (e) {
      console.log(e);
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };

  const reducer = combineReducers({ todos: todos.reducer });
  const persistedState = loadFromLocalStorage();

  const store = createStore(reducer, persistedState);
  store.subscribe(() => saveToLocalStorage(store.getState()));

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

  background-color: #b1a289;
  background-image: linear-gradient(45deg, #b1a289 0%, #fde9cb 74%);
`;

const Main = styled.section`
  display: flex;
  align-items: space-evely;
  justify-content: center;

  box-sizing: border-box;

  min-height: 67vh;
  width: 70%;

  padding: 30px 150px;
  margin: auto;

  background: #426452;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 4px;

  box-shadow: inset 0px 1px 10px 10px #22332a, 0px 0px 19px 7px #9e8d73;

  border: 10px solid #855418;
  border-image: url(${border}) 30;

  @media (max-width: 1024px) {
    padding: 20px 55px;
    width: 70%;
  }

  @media (max-width: 668px) {
    border-image: none;
    padding: 15px;
    width: 90%;
  }
`;
