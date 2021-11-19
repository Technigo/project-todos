import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div className="container-input">
      <input
        className="input-field"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="button-input" onClick={() => onAddTodo(input)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AddTodo;
