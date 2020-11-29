import React from "react";
import { useSelector } from "react-redux";

import { TodoItem } from "../components/TodoItem";
import "../css/todoList.css";

export const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  return (
    <section className="todo-list">
      {items.map((item) => (
        <TodoItem key={item.id} item={item}/>
      ))}
    </section>
  );
};
