import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TodoList } from "../components/TodoList";
import { todos } from "reducers/todos";
import { Header } from "../components/Header";

export const Home = () => {
  const reducer = combineReducers({ todos: todos.reducer });
  
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <div className="home-page">
        <Header/>
        <TodoList/>
      </div> 
    </Provider>
  );
};