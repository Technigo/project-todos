import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";
import "./TodoListStyle.css";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  return (
    <div>
      {items.map((todo) => (
        <div className="border todo-list-item-container" key={todo.id}>
          <div className="todo-list-item-title">
            <h3>{todo.title}</h3>
          </div>
          <div className="todo-list-item-content">
            <input
              className="input-style"
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => {
                dispatch(todos.actions.toggleComplete(todo.id));
              }}
            />
            <p>{todo.description}</p>
            <button
              onClick={() => {
                dispatch(todos.actions.removeItem(todo.id));
              }}
            >
              Delete Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
