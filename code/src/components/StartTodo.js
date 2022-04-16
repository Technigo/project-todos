import React from "react";
import { useSelector } from "react-redux";

// import tasks from "reducers/tasks";

import TodoList from "./TodoList";
import NoTodos from "./NoTodos";

const StartTodo = () => {
  const items = useSelector((store) => store.tasks.items);

  return (
    <>
      {items.length > 0 && <TodoList />}
      {items.length < 1 && <NoTodos />}
    </>
  );
};

export default StartTodo;
