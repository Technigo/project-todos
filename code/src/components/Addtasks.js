import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import uniqid from "uniqid";

import tasks from "reducers/tasks";
import Tasklist from "./Tasklist";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>
            {" "}
            List your tasks: <br />{" "}
          </h1>
          Date: {dateToday} <br />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </label>
        <button type="submit">Add Tasks</button>
      </form>
      <Tasklist />
    </div>
  );
};

export default Addtasks;
