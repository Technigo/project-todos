import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Container, Paper, Box } from "@material-ui/core";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';

import { tasks } from "reducers/tasks";
import { TodoList } from "components/TodoList";
import { TodoInput } from "components/TodoInput";
import { Header } from "components/Header"
import theme from './theme';

//not really needed for one, but add more here if you want to combine reducers
const reducer = combineReducers({ tasks: tasks.reducer });

const store = configureStore({ reducer });

//special syntax needed to override styling of MUI (&&)
// const MyContainer = styled(Container)`
//   && {
//   padding: 0;
//   }`;

  // const theme = createMuiTheme({
  //   palette: {
  //     type: 'dark',
  //   }
  // })

export const App = () => {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        
      <Paper> 
      {/* <MyContainer maxWidth="xs"> */}
        <Header/>
        <TodoInput />
        <TodoList />
      {/* </MyContainer> */}
      </Paper>
      
      </ThemeProvider>
    </Provider>
  );
};
