import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import todos from "./reducers/todos";
import TodoPage from "./components/TodoPage";
import TheStart from "./components/TheStart";

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer: reducer });

export const App = () => {
  return (
    <>
      <BackgroundStyle>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<TheStart />} />
              <Route path="/Todos" element={<TodoPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </BackgroundStyle>
    </>
  );
};

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
