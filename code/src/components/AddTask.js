import React, { useState } from "react";
import { useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const AddTask = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const checkKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onAddTask(e);
    }
  };

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <section>
        <input
          type="text"
          value={input}
          onKeyDown={(e) => checkKey(e)}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={onAddTask} disabled={input.length === 0}>
          +
        </button>
      </section>
    </form>
  );
};

export default AddTask;
