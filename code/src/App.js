import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Container } from "@material-ui/core";
import { styled } from '@material-ui/core/styles';

import { tasks } from "reducers/tasks";
import { TodoList } from "components/TodoList";
import { TodoInput } from "components/TodoInput";
import { Header } from "components/Header"

//not really needed for one, but add more here if you want to combine reducers
const reducer = combineReducers({ tasks: tasks.reducer });

const store = configureStore({ reducer });

const MyContainer = styled(Container)({
  padding: '0',
});


export const App = () => {
  return (
    <Provider store={store}>
      <MyContainer maxWidth="xs">
        <Header/>
        <TodoInput />
        <TodoList />
      </MyContainer>
    </Provider>
  );
};
