import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const todos = useSelector(state => state.tasks.total);

  return <div>Total todos: {todos} </div>;
};
