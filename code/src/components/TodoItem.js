import React from "react";

export const TodoItem = ({ todo }) => {
  return <li className="todo-item">{todo.text}</li>;
};
