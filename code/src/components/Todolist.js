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

  return (
    <section className="todolist-container">
      {items.map((item) => (
        <div className="flex-item" key={item.id}>
          <p className="item-text">{item.text}</p>
          <input
            type="checkbox"
            className="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />

          <div className="button-container">
            <button className="buttons" onClick={() => onCompleteTodo(item.id)}>
              <i class="fa fa-close"></i>
            </button>
            <button className="buttons" onClick={() => onDeleteTodo(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
