import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
    const newId = Math.random() * 99999999999;
    if (inputValue === "") {
      alert("You can't add an empty todo.");
    } else {
      newTodo = {
        id: newId,
        description: inputValue,
        isComplete: false,
      };
    }

    dispatch(todos.actions.addItem(newTodo));
    setInputValue("");
  };
  return (
    <div className="border">
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleOnClick}>Add Task</button>
      </form>
    </div>
  );
};

export default NewTask;
