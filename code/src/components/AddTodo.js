import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid grey;
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onAddTodo = (input) => {
    dispatch(todos.actions.addTodo(input));

    setInput("");
  };

  return (
    <InputContainer>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => onAddTodo(input)}>New Task</button>
    </InputContainer>
  );
};

export default AddTodo;
