import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";

import "./TodoForm.css";
import todos from "../../reducers/todos";

const TodoFrom = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uniqid(),
      description: value,
      isComplete: false,
    };

    dispatch(todos.actions.addTodo(newTodo));
    setValue(""); // empty input field after adding a task
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <input
        className="input-filed"
        placeholder="Add task"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="submitt-button">
        +
      </button>
    </form>
  );
};

export default TodoFrom;
