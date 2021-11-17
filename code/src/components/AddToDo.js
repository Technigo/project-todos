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
        Add
      </StyledButton>
      <TextInput
        type="text"
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
  background-color: #fceef5;
  width: 320px;
  height: 100px;
  margin: 20px auto 30px;
  /* border: 1px solid lightgrey; */
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

const StyledButton = styled.button`
  appearance: button;
  background-color: #ea86b6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #e05297;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  :after {
    background-clip: padding-box;
    background-color: #f3bad6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  :main,
  :focus {
    user-select: auto;
  }

  :hover:not(:disabled) {
    filter: brightness(1.1);
  }

  :disabled {
    cursor: auto;
  }

  :active:after {
    border-width: 0 0 0px;
  }

  :active {
    padding-bottom: 10px;
  }
`;
