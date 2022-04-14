import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";

const ToDos = () => {
  const todos = useSelector((state) => state.todo.todo);
  return (
    <ul className="container-column" style={{ width: "100%" }}>
      {todos.map((todo) => (
        <ToDo key={todo.id} todoItem={todo} />
      ))}
    </ul>
  );
};

export default ToDos;
