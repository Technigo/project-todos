import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>+</button>
    </div>
  );
};
