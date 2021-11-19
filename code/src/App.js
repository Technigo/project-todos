import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./reducers/todos";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const BackgroundStyle = styled.section`
  background-image: url("https://images.unsplash.com/photo-1522199670076-2852f80289c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80");
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  width: 100%;
`;
const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer: reducer });

export const App = () => {
  return (
    <>
      <BackgroundStyle>
        <Provider store={store}>
          <Header />
          <AddTodo />
          <TodoList />
        </Provider>
      </BackgroundStyle>
    </>
  );
};
