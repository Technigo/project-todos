import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  const onCompleteTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };
  const onDoingTodo = (id) => {
    dispatch(todos.actions.toggleDoingTodo(id));
  };

  return (
    <section className="todolist-container">
      {items.map((item) => (
        <div className="flex-item" key={item.id}>
          <div className="todo-container">
            <div className="canban"></div>
            <p className="item-text">{item.text}</p>
            <input
              type="checkbox"
              className="checkbox-doing"
              checked={item.isDoing}
              onChange={() => onToggleTodo(item.id)}
            />
            <input
              type="checkbox"
              className="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
          </div>

          <div className="button-container">
            <button
              className="delete-button"
              onClick={() => onDeleteTodo(item.id)}
            >
              X
            </button>
            <button
              className="complete-button"
              onClick={() => onDoingTodo(item.id)}
            >
              doing
            </button>
            <button
              className="complete-button"
              onClick={() => onCompleteTodo(item.id)}
            >
              done
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
