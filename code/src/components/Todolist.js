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
            <p className="item-text">{item.text}</p>
            <div className="checkbox-container">
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
          </div>

          <div className="button-container">
            <button className="button" onClick={() => onDeleteTodo(item.id)}>
              <span role="img" aria-label="checked">
                &#10006;
              </span>
            </button>
            <div className="complete-button-container">
              <button className="button" onClick={() => onDoingTodo(item.id)}>
                <span role="img" aria-label="checked">
                  &#x2714;
                </span>
              </button>
              <button
                className="button"
                onClick={() => onCompleteTodo(item.id)}
              >
                <span role="img" aria-label="checked">
                  &#x2714;
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
