import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "../reducers/todos";
import { AddButton } from "./Buttons";

export const AddTodo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div className="InputWrapper">
      <input
        type="text"
        className="text-input"
        placeholder="Add"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddButton onClick={onAddTodo} disabled={input < 1}>
        +
      </AddButton>
    </div>
  );
};
