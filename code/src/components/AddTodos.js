import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";
import CompleteButtons from "./CompleteButtons";

const InputStyle = styled.div`
  width: 270px;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 0 0 20px 0;
  display: flex;
  justify-content: space-evenly;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  input {
    padding: 10px;
    margin-right: 5px;
    border-radius: 10px;
    border: none;
  }

  button {
    align-self: center;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.inputBackground};
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-weight: bold;
    text-align: center;
  }

  button:hover {
    cursor: pointer;
    border: 2px solid white;
    transition: 0.1s;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <>
      <CompleteButtons />
      <InputStyle>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button disabled={input === ""} onClick={onAddTodo} value={""}>
          ➕
        </button>
      </InputStyle>
    </>
  );
};

export default AddTodo;
