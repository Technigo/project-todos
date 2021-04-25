import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";

import todos from "../../reducers/todos";

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  const dispatch = useDispatch();

  return (
    <div className="todo-list-container">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list">
          <p>{task.description}</p>
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
          />
          <button onClick={() => dispatch(todos.actions.removeTodo(task.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
