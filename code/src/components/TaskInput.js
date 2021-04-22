import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import todos from "../reducers/todos";

export const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uniqid(),
      description: task,
      isComplete: false,
    };

    dispatch(todos.actions.addTask(newTask));

    setTask("");
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
    </>
  );
};
