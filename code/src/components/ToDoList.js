import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

import todos from "../reducers/todos";

import { FaTrashAlt } from "react-icons/fa";

export const ToDoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);
  const tasksLeft = tasks.filter((task) => task.isComplete === false);

  const dispatch = useDispatch();
  return (
    <>
      <div className="task-wrapper">
        {tasks.map((todo) => (
          <div key={todo.id} className="task" id="task">
            <span
              className="delete-button"
              onClick={() => dispatch(todos.actions.removeTask(todo.id))}
            >
              <FaTrashAlt />
            </span>
            <div className="task-and-checkbox">
              <p>{todo.description}</p>

              <Checkbox
                type="checkbox"
                size="medium"
                color="primary"
                checked={todo.isComplete}
                onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="tasks-left">
        {tasksLeft.length} / {tasks.length} tasks left
      </p>
    </>
  );
};
