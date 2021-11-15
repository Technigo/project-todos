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

  return (
    <StyledMainDiv>
      <StyledButton onClick={onAddTodo}>+</StyledButton>
      <TextInput
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="add task here"
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
  height: 80px;
  margin: 50px auto 30px;
  border: 1px solid hotpink;
  box-shadow: 2px 2px 3px hotpink;
  border-radius: 5px;

  @media (min-width: 700px) {
    width: 500px;
    height: 100px;
    margin: 150px auto 30px;
  }
`;

const TextInput = styled.input`
  margin: 5px;
  width: 150px;
  height: 30px;
  border: 2px solid pink;
  background-color: white;
  font-size: 16px;
`;

const StyledButton = styled.button`
  color: hotpink;
  border: none;
  background-color: white;
  /* 
  background-color: pink;
  border: 1px solid pink;
  border: 1px solid hotpink;
  box-shadow: 3px 2px 3px hotpink;
  box-sizing: border-box;
  border-radius: 100px; 
  */
  margin-right: 15px;
  font-size: 28px;

  :hover {
    /* background-color: pink; */
    box-shadow: 2px 2px 2px 1px hotpink;
    cursor: grab;
  }
`;
