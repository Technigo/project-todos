import React from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";
import { useState } from "react";

export const AddToDo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onAddTodo = () => {
    dispatch(todos.actions.addToDo(input));
  };

  const resetInput = () => {
    setInput("");
  };

  return (
    <StyledMainDiv>
      <StyledButton
        onClick={() => {
          onAddTodo();
          resetInput();
        }}
      >
        <i class="fas fa-tasks"></i>
      </StyledButton>
      <TextInput
        type="text"
        placeholder="add task here.."
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </StyledMainDiv>
  );
};

const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 320px;
  height: 150px;
  margin: 20px auto 30px;
  /* border: 1px solid #ea86b6; */
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 500px;
    margin: 80px auto 30px;
  }
`;

const TextInput = styled.input`
  margin: 20px;
  width: 180px;
  height: 30px;
  border: 0.5px solid white;
  caret-color: hotpink;
  color: hotpink;
  background-color: white;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;

  @media (min-width: 700px) {
    font-size: 22px;
  }
`;

const StyledButton = styled.button`
  font-size: 2em;
  margin-left: 15px;
  color: hotpink;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
