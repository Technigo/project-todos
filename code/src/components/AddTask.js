import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Selector from "./Selector";

import todo from "../reducers/todo";

const AddTask = () => {
  // working with the Date object, we get todays date, set the time to the end of the day and then turn it into milliseconds
  let todayDate = new Date();
  todayDate.setUTCHours(22, 59, 59, 999);
  let todayInSec = todayDate.getTime();

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Dealing with the date to set tomorrow as the default for the DatePicker
  const [startDate, setStartDate] = useState(todayInSec);
  console.log(startDate);
  const onAddTask = () => {
    const time = Date.now();
    // const dueTimeStamp = Math.round(startDate.getTime());
    dispatch(todo.actions.addTodo({ text: input, time, dueAt: startDate }));
  };

  return (
    <div>
      <button onClick={onAddTask}>+</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      ></input>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date.getTime());
        }}
      />
      <Selector />
    </div>
  );
};

export default AddTask;
