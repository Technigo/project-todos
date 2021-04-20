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
           <p> {task.createdAt}</p>
          <div className="todo-list-item__inner">
            <Task {...task} />
          </div>
          <div className="todo-list-item__inner-deadline">
          <p>Deadline: </p>
          <p>4 hours left</p>
          </div>
          <div className="todo-list-item__inner-button-container">
            <RoundedButton type={"Delete"} id={task.id} />
          </div>
        </div>
      ))}
    </section>
  );
};
