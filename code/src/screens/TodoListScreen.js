import React from "react";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList/TodoList";

export const TodoListScreen = () => {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};
