import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import styled from "styled-components";


import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";

import { todos } from "./reducers/todos";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AppMainContainer>
        <Header />
        <Todos />
        <AddTodo />
        <Footer />
      </AppMainContainer>
    </Provider>
  )
}

const AppMainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;  
`;
