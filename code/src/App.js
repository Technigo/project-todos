import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { todos } from "./Reducers/todos";
import { TodoList } from "./Components/TaskList/TodoList";
import { CreateNewTask } from "./Components/AddTask/CreateNewTask";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import background from "./Assets/background.jpg";

export const App = () => {
  const reducer = combineReducers({
    todos: todos.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <OuterWrapper>
        <Sidebar></Sidebar>
        <Wrapper>
          <Header />
          <WrapperInner>
            <CreateNewTask />
            <TodoList />
          </WrapperInner>
          <Footer />
        </Wrapper>
        <Sidebar></Sidebar>
      </OuterWrapper>
    </Provider>
  );
};

const OuterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Sidebar = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    flex: 1 1 auto;
    background-size: cover;
    background-attachment: fixed;
    background-image: url("${background}");
    opacity: 0.2;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding-top: 150px;
  padding-bottom: 50px;
  position: relative;
  background: #6e5773;

  @media (min-width: 768px) {
    width: auto;
    min-height: calc(100vh - 300px);
    padding-top: 250px;
  }
`;

const WrapperInner = styled.div`
  width: 100%;
  flex: 1 1 auto;
  width: calc(100% - 10px);
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
