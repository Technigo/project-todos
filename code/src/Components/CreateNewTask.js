import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./CreateNewTaskStyle.css";

export const CreateNewTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.createNewTodo({ task: newTask }));
    setNewTask("");
  };

  return (
    <section className="new-task">
      <button type="button" className="new-task-btn" onClick={() => handleClick()}>
        +
      </button>
      <textarea
      className="new-task-input"
        placeholder="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></textarea>
    </section>
  );
};
