import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./TodoList.css";
import deleteImage from "../../assets/delete_color.png";
import todos from "../../reducers/todos";

const TodoList = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  const dispatch = useDispatch();

  return (
    <div className="todo-list-container">
      {tasks.map((task) => (
        <div key={task.id} className="todo-list">
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              checked={task.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(task.id))}
            />
            {/* <span className="checkbox-custom"></span> */}
            <p className="checkbox-text">{task.description}</p>
          </div>
          <button
            className="delete-button"
            onClick={() => dispatch(todos.actions.removeTodo(task.id))}
          >
            <img
              className="delete-button-icon"
              src={deleteImage}
              alt="delete icon"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
