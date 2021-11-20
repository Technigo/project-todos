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
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <p>{item.date}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </div>
      ))}
      <p>{numberOfTodos}</p>
    </section>
  );
};

export default TodoList;
