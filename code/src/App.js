import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Container, Paper } from "@material-ui/core";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider, } from '@material-ui/core/styles';

import { tasks } from "reducers/tasks";
import { TodoList } from "components/TodoList";
import { TodoInput } from "components/TodoInput";
import { Header } from "components/Header"

//not really needed for one, but add more here if you want to combine reducers
const reducer = combineReducers({ tasks: tasks.reducer });

const store = configureStore({ reducer });

//special syntax needed to override styling of MUI (&&)
const MyContainer = styled(Container)`
  && {
  padding: 0;
  }`;

export function App() {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  })

  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Paper>
      <MyContainer maxWidth="xs">
        <Header/>
        <TodoInput />
        <TodoList />
      </MyContainer>
      </Paper>
      </ThemeProvider>
    </Provider>
  );
};
