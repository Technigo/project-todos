import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./TodoListStyle.css";

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  return (
    <section className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list-item">
          <label
            className="todo-list-item__label"
            htmlFor={task.id}
            style={
              task.isComplete
                ? { color: "rgb(196, 232, 241)" }
                : { color: "black" }
            }
          >
            <input
              checked={task.isComplete}
              id={task.id}
              type="checkbox"
              onChange={() =>
                dispatch(todos.actions.toggleComplete({ id: task.id }))
              }
            />
            <span className="todo-list-item__checkbox-mark"></span>
            {task.description}
          </label>
        </div>
      ))}
    </section>
  );
};
