import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";
import "components/addTaskForm.css";

export const AddTaskForm = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(tasks.actions.addTask(name));
    setName("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            className="input-field"
            placeholder=" e.g buy milk"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </label>
        <button className="add-button" type="submit">
          +
        </button>
      </form>
    </section>
  );
};
