import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";
import todos from "reducers/todos";
import { createGlobalStyle } from "styled-components";

import Header from "components/Header";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Kalam', cursive;
  color: #4B4E53;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  margin: auto;
  margin-top: 100px;
`;
const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <AddTodo />
        <TodoList />
      </Wrapper>
    </Provider>
  );
};
