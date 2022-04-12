import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const Button = styled.button`
  align-self: center;
  text-transform: uppercase;
  color: whitesmoke;
  font-family: "Inconsolata";
  border-radius: 10px;
  padding: 10px;
  font-size: 10px;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <div>
      <p>Things that has to be done!</p>
      <input
        className="text-input"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        maxLength="22"
      />
      <Button onClick={onAddTodo}>
        <span role="img" aria-label="plus">
          ➕
        </span>
      </Button>
    </div>
  );
};

export default AddTodo;
