import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 20px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 20px;
  }
  @media (min-width: 1366px) {
    justify-content: center;
  }
`;

const StyledInput = styled.input`
  width: 65%;
  background-color: #8fbfd7;
  border: 1px solid #337b9e;
  border-radius: 20px;
  padding: 10px;

  @media (min-width: 768px) {
    border-radius: 30px;
    padding: 25px;
  }
  @media (min-width: 1366px) {
    width: 400px;
    margin-right: 30px;
  }
`;

const AddButton = styled.button`
  height: 25px;
  width: 50px;
  background-color: #3b8cb4;
  border: 1px solid #337b9e;
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 80px;
    border-radius: 40px;

    &:hover {
      background-color: #276a8b;
    }
  }
`;

const AddEmoji = styled.span``;

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const onAddTodo = (input) => {
    dispatch(todos.actions.addTodo(input));

    setInput("");
  };

  return (
    <InputContainer>
      <StyledInput
        placeholder="Add new task ..."
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddButton disabled={!input} onClick={() => onAddTodo(input)}>
        <AddEmoji>
          <span role="img" aria-label="add-emoji">
            ➕
          </span>
        </AddEmoji>
      </AddButton>
    </InputContainer>
  );
};

export default AddTodo;
