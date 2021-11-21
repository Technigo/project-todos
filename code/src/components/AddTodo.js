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
        placeholder="Next todo.."
        onKeyDown={event => onEnter(event)}
        onChange={event => setInput(event.target.value)}
      />
      <button className="add-button" onClick={onAddTodo}>
        <span role="img" aria-label="Add-plus">
          ➕
        </span>
      </button>
    </div>
  );
};

export default AddTodo;
