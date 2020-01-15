import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./reducers/tasks";
import styled from "styled-components";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { List } from "./components/List";

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <ToDo>
        <Header />
        <AddTask />
        <List />
      </ToDo>
    </Provider>
  );
};

const ToDo = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fdfdfd;

  @media (min-width: 768px) {
    width: 50vw;
    height: 75vh;
    margin-top: 5vh;
  }
`;
