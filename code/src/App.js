import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import useDarkMode from "components/useDarkMode";
// import { lightTheme, darkTheme } from "components/theme";
// import { GlobalStyles } from "components/global";

import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodos";
import TodoList from "components/TodoList";
import Toggle from "components/Toggle";

const LightTheme = {
  pageBackground: "lightgrey",
  titleColor: "black",
  tasksToComplete: "black",
  inputBackground: "lightblue",
  listItemBackground: "whitesmoke",
  listItem: "pink",
};

const DarkTheme = {
  pageBackground: "grey",
  titleColor: "white",
  tasksToComplete: "white",
  inputBackground: "blue",
  listItemBackground: "lightgrey",
  listItem: "purple",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer: reducer });

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
