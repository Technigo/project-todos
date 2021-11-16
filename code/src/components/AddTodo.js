import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispach = useDispatch();

  const onAddTodo = () => {
    dispach(todos.actions.addTodo(input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>a</button>
    </div>
  );
};

export default AddTodo;
