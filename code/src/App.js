import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { combineReducers, createStore } from "@reduxjs/toolkit";
// import useDarkMode from "components/useDarkMode";
// import { lightTheme, darkTheme } from "components/theme";
// import { GlobalStyles } from "components/global";

import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodos";
import TodoList from "components/TodoList";

const LightTheme = {
  pageBackground: "#CEE5D0",
  titleColor: "#152A38",
  tasksToComplete: "#152A38",
  inputBackground: "#F3F0D7",
  listItemBackground: "#F9CF93",
  listItem: "#152A38",
  buttonBackground: "#E99497",
};

const DarkTheme = {
  pageBackground: "#413C69",
  titleColor: "#A7C5EB",
  tasksToComplete: "#709FB0",
  inputBackground: "#4A47A3",
  listItemBackground: "#709FB0",
  listItem: "#4A47A3",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const reducer = combineReducers({
  todos: todos.reducer,
});

// const store = configureStore({ reducer });

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

  // const [theme, toggleTheme] = useDarkMode();
  // const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* theme={themeMode}> */}
      <Provider store={store}>
        {/* <GlobalStyles /> */}
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Header theme={theme} setTheme={setTheme} />
        <AddTodo />
        <TodoList />
      </Provider>
    </ThemeProvider>
  );
};
