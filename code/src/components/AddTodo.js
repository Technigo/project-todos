import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const input = styled.div`
display: flex;
flex-direction: column;
gap; 10px;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };
  return (
    <div className="add-todo">
      <input
        type="Text"
        className="input"
        value={input}
        placeholder="what's up today?"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="add-button" onClick={onAddTodo}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
