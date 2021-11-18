import React, { useState } from "react";
import { useDispatch } from "react-redux"; //always

import todos from "../reducers/todos"; //always

const AddTodo = () => {
  const [input, setInput] = useState(""); //initialized with empty string

  // Always have to create an instance for dispatch
  const dispatch = useDispatch();

  const onTodoAdd = () => {
    dispatch(todos.actions.addTodo(input)); //input = payload
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onTodoAdd}>
        <i class="fas fa-plus"></i>
      </button>
    </div>
  );
};

// onClick={() => dispatch(todos.actions.addTodo())}

export default AddTodo;
