import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector(store => store.todos.items);
  const numberOfTodos = items.length;

  const dispatch = useDispatch();

  const onToggleTodo = id => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = index => {
    dispatch(todos.actions.deleteTodo(index));
  };
  return (
    <section>
      <p>Tasks: {numberOfTodos}</p>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>{item.date}</p>
          <button className="delete-button" onClick={() => onDeleteTodo(index)}>
            <span role="img" aria-label="Delete">
              🗑️
            </span>
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
