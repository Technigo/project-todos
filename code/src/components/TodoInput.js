import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const TodoInput = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (text !== "") {
      dispatch(todos.actions.addTodo({ text }));
      setText("");
    }
  };

  return (
    <form className="TodoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New todo"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
