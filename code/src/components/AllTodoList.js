import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos, { selectFilteredTodos } from "../reducers/todos";

export const AllTodoList = () => {
  const items = useSelector((state) => selectFilteredTodos(state));

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <section className="todo-wrapper">
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <input type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
          <p className={item.isComplete ? "completed" : "incompleted"}>{item.text}</p>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
};
