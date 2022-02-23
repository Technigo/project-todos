import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodos";
import TodoList from "components/TodoList";

const LightTheme = {
  pageBackground: "#FAF1E6",
  titleColor: "#064420",
  tasksToComplete: "#152A38",
  inputBackground: "#E4EFE7",
  listItemBackground: "#FDFAF6",
  listItem: "#064420",
  listItemDone: "#9DBEB9",
  buttonBackground: "#9DBEB9",
  background: "#F6F6F6",
};

const DarkTheme = {
  pageBackground: "#0F044C",
  titleColor: "#EEEEEE",
  tasksToComplete: "#E9A6A6",
  inputBackground: "#787A91",
  listItemBackground: "#5C527F",
  listItem: "#EEEEEE",
  listItemDone: "#8787A3",
  buttonBackground: "#EAE1E1",
  background: "#261C2C",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const reducer = combineReducers({
  todos: todos.reducer,
});

const BackgroundColor = styled.section`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem("todos");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

export const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Provider store={store}>
        <BackgroundColor>
          <Header theme={theme} setTheme={setTheme} />
          <AddTodo />
          <TodoList />
        </BackgroundColor>
      </Provider>
    </ThemeProvider>
  );
};
