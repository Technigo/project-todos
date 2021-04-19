import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";

export const TodoList = () => {
  const tasks = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  return (
    <section className="todo-list">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list__item">
          <input
            id={task.id}
            type="checkbox"
            onChange={() =>
              dispatch(todos.actions.toggleComplete({ id: task.id }))
            }
          ></input>
          <label htmlFor={task.id}>{task.description}</label>
        </div>
      ))}
    </section>
  );
};
