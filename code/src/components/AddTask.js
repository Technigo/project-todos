import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Selector from "./Selector";
import AddCategory from "./AddCategory";

import todo from "../reducers/todo";

import { ReactComponent as Add } from "../images/add.svg";

const AddTask = () => {
  // working with the Date object, we get todays date, set the time to the end of the day and then turn it into milliseconds
  let todayDate = new Date();
  todayDate.setUTCHours(22, 59, 59, 999);
  let todayInSec = todayDate.getTime();

  // This will hold the value of the text input field
  const [input, setInput] = useState("");

  // state variable to hold categories gets passed down to the a component
  const [categoryStorage, setCategoryStorage] = useState("");
  console.log(categoryStorage);

  // Dealing with the date to set tomorrow as the default for the DatePicker
  const [startDate, setStartDate] = useState(todayInSec);

  const dispatch = useDispatch();

  const onAddTask = () => {
    const time = Date.now();
    // const dueTimeStamp = Math.round(startDate.getTime());
    dispatch(
      todo.actions.addTodo({
        text: input,
        time,
        dueAt: startDate,
        category: categoryStorage,
      })
    );
  };

  return (
    <>
      <div className="add-task-wrapper">
        <button className="btn-add" onClick={onAddTask}>
          <Add className="add-svg" height="50px" width="50px" />
        </button>
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Task"
        ></input>

        <div className="task-options-wrapper">
          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date.getTime());
            }}
          />
          <AddCategory
            categoryStorage={categoryStorage}
            setCategoryStorage={setCategoryStorage}
          />
        </div>
      </div>
      <Selector />
    </>
  );
};

export default AddTask;
