import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import "./CreateNewTaskStyle.css";
import {RadioButtons} from './RadioButtons'

export const CreateNewTask = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const moment = require("moment");
  const currentTime = moment().format("MMM Do YY");

  const handleClick = () => {
    dispatch(todos.actions.createNewTodo({ task: newTask, time: currentTime }));
    setNewTask("");
  };

  return (
    <section className="new-task">
      <div className="new-task__outer">
      <div className="new-task__inner">
        <button
          type="button"
          className="new-task__inner-btn"
          onClick={() => handleClick()}
        >
          +
        </button>
        <textarea
          className="new-task__inner-input"
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        ></textarea>
      </div>
      <RadioButtons />
      </div>
    </section>
  );
};
