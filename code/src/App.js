import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import Header from "./components/Header";
import Todolist from "./components/TodoList";
import { todos } from "./reducers/Todos";
import { Container } from "components/StyledComponents";

const reducer = combineReducers({ todos: todos.reducer });

const store = configureStore({ reducer });

export const App = () => {
  const [toDone, setToDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [allTodos, setAllTodos] = useState(true);

  return (
    <Provider store={store}>
      <Container>
        <Header toDone={toDone} notDone={notDone} allTodos={allTodos} setToDone={setToDone} setNotDone={setNotDone} setAllTodos={setAllTodos} />
        <Todolist toDone={toDone} notDone={notDone} allTodos={allTodos} />
      </Container>
    </Provider>
  );
};
