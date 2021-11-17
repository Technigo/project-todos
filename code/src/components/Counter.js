import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((store) => store.todos.items.length);

  return (
    <div>
      <p>You have {counter} tasks on your todo list</p>
    </div>
  );
};

export default Counter;
