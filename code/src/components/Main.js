import React from "react";
import { AddTodoScreen } from "../screens/AddTodoScreen";
import { useSelector } from "react-redux";
import { TodoListScreen } from "screens/TodoListScreen";

// From main I direct which screen will be shown depending on the current screen.
export const Main = () => {
  const currentScreen = useSelector((store) => store.screen.currentScreen);

  return (
    <>
      {currentScreen === "todoList" && <TodoListScreen />}
      {currentScreen === "newTodo" && <AddTodoScreen />}
    </>
  );
};
