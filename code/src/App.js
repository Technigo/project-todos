import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import tasks from "./reducers/tasks";

import Header from "./components/Header";
import StartTodo from "./components/StartTodo";

// Styled Components
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// Styled Components

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <StartTodo />
      </Main>
    </Provider>
  );
};
