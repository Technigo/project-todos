import React, { useState } from "react";

import "../css/addTodo.css";

import { useDispatch } from "react-redux";

import { todos } from "../reducer/todos";

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(todos.actions.addItem(value));
    setValue("");
  };

  const handleKeypress = (event) => {
    // triggers when pressing the enter key on keyboead
    if (
      (event.keyCode === 13 || event.nativeEvent.key === "Enter") &&
      value.length > 1 &&
      value.length < 151
    ) {
      onItemAdd();
    }
  };

  return (
    <section className="add-todo">
      <input
        className="add-todo-text"
        type="text"
        placeholder="Write your task here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeypress}
      />
      <button
        className="add-todo-button"
        disabled={value.length < 2 || value.length > 150}
        onClick={onItemAdd}
      >
        <span className="plus-sign" role="img" aria-label="click to add to the list">➕</span>
      </button>
    </section>
  );
};
