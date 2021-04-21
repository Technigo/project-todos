import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import "./NewTaskStyle.css";
import todos from "../reducers/todos";

const NewTask = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  let newTodo;

  const handleOnClick = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("You can't add an empty todo.");
    } else {
      newTodo = {
        id: uniqid(),
        description: inputValue,
        isComplete: false,
      };
    }
    dispatch(todos.actions.addItem(newTodo));
    setInputValue("");
  };
  return (
    <div className="new-task-container">
      <div className="new-task-section border">
        <form>
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleOnClick}>Add New Task</button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
