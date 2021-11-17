import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

import AddTag from "../components/AddTag";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div>
      <label htmlFor="newTodo">New todo</label>
      <input
        type="text"
        name="newTodo"
        placeholder="Add new todo here..."
        onChange={(event) => setInput(event.target.value)}
      />
      <AddTag />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
