import React from "react";
import { useSelector } from "react-redux";

// import todos from "../reducers/todos";

const Counter = () => {
  const counter = useSelector((store) => store.todos.currentTodoIndex);
  return <div>{counter + 1}</div>;
};

export default Counter;
