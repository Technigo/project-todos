import React from "react";
import { useSelector } from "react-redux";

const TodoCount = () => {
  const TodoCount = useSelector((state) => state.todo.length);

  return (
    <selection className="TodoCountContent">
      <p>Todos: {TodoCount} </p>
    </selection>
  );
};

export default TodoCount;
