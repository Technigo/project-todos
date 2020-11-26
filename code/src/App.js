import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { todos } from "./reducers/todos";
import { List } from "./components/List";
import { AddItem } from "./components/AddItem";
import { CountItems } from "./components/CountItems";

const reducer = combineReducers({ todos: todos.reducer });
const store = configureStore({ reducer });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 50%;
  margin: auto;
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <AddItem />
        <CountItems />
        <List />
      </Container>
    </Provider>
  )
}
