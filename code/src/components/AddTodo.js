import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

export const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = (e) => {
    dispatch(todos.actions.addTodo(input));
    setInput("");
    e.preventDefault();
  };

  return (
    <form onSubmit={onAddTodo}>
      <div className="todo-input">
        <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
        <button type="submit">Add todo</button>
      </div>
    </form>
  );
};
