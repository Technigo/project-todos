import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodoImmutability = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section>
      {items.map((item) => (
        <div className="flex-item" key={uniqid()}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodoImmutability(item.id)}>
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
