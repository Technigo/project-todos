import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos.js";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // E står för Event
  const handleOnSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    // This is where we will Dispatch the action to save new todo item
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false,
      })
    );

    // Clear the text field
    setInputValue("");
  };

  return (
    <form className="todo-input" onSubmit={handleOnSubmit}>
      <input
        type="submit"
        className="todo-input-button"
        value="+"
        disabled={
          inputValue.length < 5 || inputValue.length > 50 ? true : false
        }
      ></input>

      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        className="todo-input-text"
        placeholder={"Add task"}
      ></input>
    </form>
  );
};
