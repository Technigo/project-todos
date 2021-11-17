import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "components/theme";
import { GlobalStyles } from "components/global";

import todos from "./reducers/todos";
import Header from "components/Header";
import AddTodo from "components/AddTodos";
import TodoList from "components/TodoList";
import Toggle from "components/Toggle";

// const LightTheme = {
//   pageBackground: "white",
//   titleColor: "black",
//   tagLineColor: "black"
// }

// const DarkTheme = {
//   pageBackground: "grey",
//   titleColor: "white",
//   tagLineColor: "white"
// }

// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// }

const reducer = combineReducers({
  todos: todos.reducer,
});

const store = configureStore({ reducer: reducer });

export const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Provider store={store}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <AddTodo theme={theme} toggleTheme={toggleTheme} />
        <TodoList theme={theme} toggleTheme={toggleTheme} />
      </Provider>
    </ThemeProvider>
  );
};
