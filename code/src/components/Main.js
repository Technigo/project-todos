import React from "react";
import { Header } from "./Header";
import { TodoList } from "./TodoList";
import { NewTodoScreen } from "./NewTodoScreen";
import { useSelector } from "react-redux";

export const Main = () => {
  const currentScreen = useSelector((store) => store.todo.currentScreen);

  return (
    <>
      {currentScreen === "todoList" && (
        <>
          <Header />
          <TodoList />
        </>
      )}
      {currentScreen === "newTodo" && <NewTodoScreen />}
    </>
  );
};
