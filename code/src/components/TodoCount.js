import React from "react";
import { useSelector } from "react-redux";

const TodoCount = () => {
  const counter = useSelector((store) => store.todos.items.length);

  return <p>You have {counter} tasks to do today</p>;
};

export default TodoCount;
