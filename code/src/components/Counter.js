import React from "react";
import { useSelector } from "react-redux";
import todos from "reducers/todos";
import TodoList from "./TodoList";

const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);
  return <p>you have {items} tasks </p>;
};

export default Counter;
