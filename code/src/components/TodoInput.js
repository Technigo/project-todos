import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos.js";
import styled from 'styled-components'


export const TodoInput = ({ listId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = e => {
    // Prevent page reload
    e.preventDefault();
    const date = new Date();
    const currentDate = date.getTime();

    // Dispatch the info to create a new todo
    dispatch(
      todos.actions.addTodo({
        listId: listId,
        itemInfo: {
          description: inputValue, done: false, date: currentDate,
          display: true,
        }
      })
    );

    // Reset value
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
        value=" ➕"
      ></input>
    </form>
  );
};

