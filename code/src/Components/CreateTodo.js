import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./CreateTodoStyle.css";

export const CreateTodo = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.createNewTodo({ task: newTask }));
    setNewTask("");
  };

  return (
    <section className="new-task">
      <button type="button" onClick={() => handleClick()}>
        +
      </button>
      <input
        type="textarea"
        placeholder="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
    </section>
  );
};
