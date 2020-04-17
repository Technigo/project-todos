import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        done: false,
      })
    );
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      ></input>
      <input type="submit" value="Add todo"></input>
    </form>
  );
};
