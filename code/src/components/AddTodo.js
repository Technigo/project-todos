import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./addTodo.css";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  const resetInput = () => {
    setInput("");
  };

  return (
    <div className="main-container">
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className="submit-btn"
        onClick={() => {
          onAddTodo();
          resetInput();
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
