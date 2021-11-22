import React from "react";
import { useSelector } from "react-redux";
import "./counter.css";

const Counter = () => {
  const items = useSelector((store) => store.todos.items.length);
  return <p className="task-amount">you have {items} tasks </p>;
};

export default Counter;
