import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //v1
  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  return (
    <section>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
