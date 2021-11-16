import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const InputStyle = styled.div`
  width: 270px;
  background: lightgrey;
  padding: 20px 0;
  display: flex;
  justify-content: center;

  input {
    padding: 10px;
    margin-right: 5px;
    border-radius: 10px;
    border: none;
  }

  button {
    padding: 10px;
    background: lightpink;
    border: none;
    border-radius: 5px;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <InputStyle>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={onAddTodo}>Add todo</button>
    </InputStyle>
  );
};

export default AddTodo;
