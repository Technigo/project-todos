import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
    setInput("");
  };

  // Sends input on Enter button
  const onEnter = event => {
    if (event.key === "Enter") {
      onAddTodo();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onKeyDown={event => onEnter(event)}
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </div>
  );
};

export default AddTodo;
