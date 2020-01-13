import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const todos = useSelector(state => state.tasks.taskData.length);

  return <div>Total todos: {todos} </div>;
};
