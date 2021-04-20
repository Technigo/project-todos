import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { todos } from "../Reducers/todos";
import { AddTaskCheckbox } from "./AddTaskCheckbox";
import "./CreateNewTaskStyle.css";
import { SelectDeadline } from "./SelectDeadline";

export const CreateNewTask = () => {
  const moment = require("moment");
  const currentTime = moment().format("MMMM Do YYYY");
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [checkvalue, setCheckvalue] = useState("");

  const handleClick = () => {
    dispatch(
      todos.actions.createNewTodo({
        task: newTask,
        time: currentTime,
        deadline: dueTime,
      })
    );
    setNewTask("");
    setCheckvalue("");
  };

  return (
    <section className="new-task">
      <div className="new-task__outer">
        <div className="new-task__inner">
          <button
            type="Submit"
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
        <AddTaskCheckbox
          setDueTime={setDueTime}
          newTask={newTask}
          checkvalue={checkvalue}
          setCheckvalue={setCheckvalue}
        />
        {checkvalue==="deadline" ? <SelectDeadline setDueTime={setDueTime} /> : <></>}
      </div>
    </section>
  );
};
