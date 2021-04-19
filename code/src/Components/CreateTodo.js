import React, { useState } from "react";
import {useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";

export const CreateTodo = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="new-task">
      <button
        type="button"
        onClick={() =>
          dispatch(todos.actions.createNewTodo({ task: newTask }))
        }
      >
        +
      </button>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
    </section>
  );
};
