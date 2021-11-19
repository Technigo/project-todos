import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodo";
import TodoList from "components/TodoList";
import styled from "styled-components";


const reducer = combineReducers({
  todos: todos.reducer,
});
const store = configureStore({ reducer });

//Stlyed component
const Main = styled.main` 
width: 500px;
margin: 0 auto;
`

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <AddTodo />
        <TodoList />
      </Main>
    </Provider>
  );
};
