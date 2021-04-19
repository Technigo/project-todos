import React from "react";
import { useSelector } from "react-redux";

import "./TodoListStyle.css";
import { Task } from "./Task";
import { RoundedButton } from "./RoundedButton";

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);

  return (
    <section className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list-item">
          <Task {...task} />
          <div className="todo-list-item__button-container">
            <RoundedButton type={"Delete"} id={task.id} />
          </div>
        </div>
      ))}
    </section>
  );
};
