import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TodoContainer, ListWrapper } from "./components/styles";

import { todoList } from "./reducers/todoList";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";

const reducer = combineReducers({
  todoList: todoList.reducer
});
const store = configureStore({ reducer });

export const App = () => (
  <Provider store={store}>
    <TodoContainer>
      <Header />
      <ListWrapper>
        <AddTodo />
        <TodoList />
      </ListWrapper>
    </TodoContainer>
  </Provider>
);

//TODO
//Animation on sort??
//Toggle textarea onClick when adding new task.
//STYLING!
