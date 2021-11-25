import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

import todos from "../reducers/todos";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <>
      <StyledTextInput
        type="text"
        value={input}
        placeholder="Put your to do here..."
        onChange={(event) => setInput(event.target.value)}
      />
      <ButtonInput onClick={() => onAddTodo(input)}>
        <FaPlus />
      </ButtonInput>
    </>
  );
};

const ButtonInput = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  height: 30px;
  width: 30px;
  background-color: rgb(109, 100, 100);
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 50px;
  cursor: pointer;
  border: none;
`;
const StyledTextInput = styled.input`
  border: none;
  margin-left: 20px;
  width: 70%;
  background: rgba(233, 181, 181, 0.6);
  transition: 0.5s ease;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: rgb(109, 100, 100);
  font-size: 16px;

  &::placeholder {
    color: rgb(109, 100, 100);
  }
`;

export default AddTodo;
