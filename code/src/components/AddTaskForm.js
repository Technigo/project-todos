import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const AddTaskForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(tasks.actions.addTask(name));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          placeholder=" Add a new todo"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <button type="submit">+</button>
    </form>
  );
};
