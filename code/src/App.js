import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import tasks from "./reducers/tasks";

import Header from "./components/Header";
import StartTodo from "./components/StartTodo";

/*STYLED COMPONENTS*/
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  background: #fff;
  height: 600px;
  margin-top: 12px;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    width: 400px;
  }
`;
/*STYLED COMPONENTS*/

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Section>
          <Header />
          <StartTodo />
        </Section>
      </Main>
    </Provider>
  );
};
