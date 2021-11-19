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

    //Update input field to an empty string after submitting
		setInput("");
  };

  return (
      <form className="add-todo-section" onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Add to-do"
        value={input}
        onChange={(event) => setInput(event.target.value)} //submit input text when press enter
      />
      <button className="add-btn" onClick={addTodo} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default AddTodo;
