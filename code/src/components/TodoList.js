import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  return (
    <div>
      {items.map((todo) => (
        <div key={todo.id}>
          <p>{todo.description}</p>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => {
              dispatch(todos.actions.toggleComplete(todo.id));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
