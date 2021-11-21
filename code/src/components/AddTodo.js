import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fceef5;
  width: 320px;
  height: 100px;
  margin: 20px auto 30px;
  border-radius: 20px;
  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
    margin: 80px auto 30px;
  }
`;

const TextInput = styled.input`
  margin: 10px;
  width: 180px;
  height: 30px;
  border: 0.5px solid lightgrey;
  caret-color: black;
  color: #e05297;
  background-color: white;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addTodo(input));
  };

  return (
    <StyledMainDiv>
      <TextInput
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />{" "}
      <button onClick={onAddTodo}>Submit</button>{" "}
    </StyledMainDiv>
  );
};

export default AddTodo;
