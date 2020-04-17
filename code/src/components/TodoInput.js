import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { todos } from "../reducers/todos.js";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  // E står för Event
  const handleOnSubmit = e => {
    // Prevent page reload
    e.preventDefault();
    console.log(inputValue)
  

  // This is where we will Dispatch the action to save new todo item

  // Clear the text field
  setInputValue("");
};

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>

      <input
        type="text"
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        className="todo-input-text"
      ></input>

      <input
        type="submit"
        className="todo-input-button"
        value="Add Todo"
      ></input>
    </form>    
    );
};