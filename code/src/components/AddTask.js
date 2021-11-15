import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todo from "../reducers/todo";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(todo.actions.addTodo(input));
  };

  return (
    <div>
      <button onClick={onAddTask}>+</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      ></input>
    </div>
  );
};

export default AddTask;
