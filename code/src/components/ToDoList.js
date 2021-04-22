import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

export const ToDoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);
  const tasksLeft = tasks.filter((task) => task.isComplete === false);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        {tasks.map((todo) => (
          <div key={todo.id} className="task">
            <button onClick={() => dispatch(todos.actions.removeTask(todo.id))}>
              Delete
            </button>
            <p>{todo.description}</p>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
            />
          </div>
        ))}
      </div>
      <p>
        {tasksLeft.length} / {tasks.length}
      </p>
    </>
  );
};
