import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import styled from "styled-components";

import { tasks } from "reducers/tasks";

import { TaskList } from "./components/TaskList";
import { Date } from "components/Date";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Side>
          <Sidebar />
        </Side>
        <Container>
          <Header />
          <Date />
          <TaskList />
        </Container>
      </Main>
    </Provider>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Side = styled.div`
  width: 100%;
  height: 5rem;
  background: #eee;
  flex: wrap;

  @media (min-width: 768px) {
    height: 100%;
    width: 15rem;
  }
`;
