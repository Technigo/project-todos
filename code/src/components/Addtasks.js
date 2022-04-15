import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import uniqid from "uniqid";

import tasks from "reducers/tasks";
import Tasklist from "./Tasklist";
import Taskcounter from "./Taskcounter";

const Addtasks = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTasks = {
      id: uniqid(),
      text: inputValue,
      complete: false,
    };
    dispatch(tasks.actions.additem(newTasks));
    setInputValue("");
  };

  const date = new Date();
  const dateToday = format(date, "MM/dd/yyyy");

  return (
    <div className="input">
      <h1 className="input-heading">Task for Today</h1>
      <img className="input-image" src="./Assets/pencil.png" alt="pencil" />
      <p className="input-date">
        {" "}
        <b>Date</b> : {dateToday} <br />
      </p>

      <Taskcounter />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="form-input"
            name="task-check"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button className="add-button" type="submit">
          <span role="img" aria-label="add">
            &#43;
          </span>
        </button>
      </form>
      <Tasklist />
    </div>
  );
};

export default Addtasks;
