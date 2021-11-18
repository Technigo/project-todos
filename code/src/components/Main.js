import React from "react";
import { Header } from "./Header";
import { NewTodoScreen } from "./NewTodoScreen";
import { useSelector } from "react-redux";
import { TodoList } from "./TodoList";

export const Main = () => {
  const currentScreen = useSelector((store) => store.screen.currentScreen);

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
