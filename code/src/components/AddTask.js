import React, { useState } from "react";
import { useDispatch } from "react-redux";

import tasks from "../reducers/tasks";

const AddTask = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTask = () => {
    dispatch(tasks.actions.addTask(input));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTask}>Add todo</button>
    </div>
  );
};

export default AddTask;
