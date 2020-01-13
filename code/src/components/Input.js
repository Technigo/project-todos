import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

let taskId = 0;

export const Input = ({ handleClick }) => {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  handleClick = () => {
    dispatch(
      tasks.actions.addTask({
        text: todoText,
        id: taskId++
      })
    );
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!todoText.trim()) {
          return;
        }

        setTodoText("");
      }}
    >
      <input
        type="text"
        placeholder="Add task"
        onChange={e => setTodoText(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Add task +
      </button>
    </form>
  );
};
