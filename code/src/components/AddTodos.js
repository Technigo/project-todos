import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";
import CompleteButtons from "./CompleteButtons";
//import { set } from "@reduxjs/toolkit/node_modules/immer/dist/internal";

//const { DateTime } = require("luxon");

const InputStyle = styled.div`
  width: 260px;
  background-color: ${(props) => props.theme.inputBackground};
  padding: 20px;
  display: flex;
  justify-content: space-between;
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
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    const dateAdded = Date.now();
    let todoObject = {
      newTodo,
      dateAdded,
    };
    dispatch(todos.actions.addTodo(todoObject));
    setNewTodo("");
  };

  return (
    <>
      <CompleteButtons />
      <InputStyle>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button disabled={!newTodo} onClick={onAddTodo}>
          <span role="img" aria-label="pic">
            ➕
          </span>
        </button>
      </InputStyle>
    </>
  );
};

export default AddTodo;
