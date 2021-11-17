import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState(""); //To keep track of the current state of text input

  const dispatch = useDispatch();

  const addTodo = (event) => {
    //When the AddTodo function is called, the action is triggered and it passes the input value
    event.preventDefault();
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <form className="add-todo-section" onSubmit={addTodo}>
      <button className="add-btn" onClick={addTodo} type="submit">
        <i class="fas fa-plus"></i>
      </button>
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(event) => setInput(event.target.value)} //submit input text when press enter
      />
    </form>
  );
};

export default AddTodo;
