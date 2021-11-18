import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const TextForm = styled.form`
  margin-right: 5px;
  input {
    width: 170px;
    height: 30px;
    border-bottom: 5px solid pink;
    border-radius: 5px;
    text-align: center;
    border: none;
  }
`;
const AddButton = styled.button`
  width: 30px;
  height: 30px;
  color: pink;
  font-size: 25px;
  background-color: white;
  border: none;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: pink;
    color: white;
  }
`;
const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = (input) => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <TextForm>
      <input
        type="text"
        value={input}
        placeholder="Add Todo..."
        onChange={(event) => setInput(event.target.value)}
      />
      <AddButton onClick={() => onAddTodo(input)}>+</AddButton>
    </TextForm>
  );
};

export default AddTodo;
