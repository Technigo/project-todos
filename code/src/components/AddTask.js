import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

import { v4 as uuid } from "uuid";

import styled from "styled-components";
import { CircleButton } from "lib/Buttons";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
`;
const AddTaskInput = styled.input`
  width: 100%;
  padding-left: 20px;
  height: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 16px;
  background: #e6e6e6;
  border: none;
  outline: none;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
`;

export const AddTask = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (inputValue.match(/\S+/)) {
      dispatch(
        todos.actions.addTask({
          id: uuid(),
          text: inputValue,
          complete: false,
          time: Date.now(),
        })
      );
    }

    // reset value
    setInputValue("");
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <AddTaskInput
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        placeholder="new task"
        area-label="Type task here"
      />
      <CircleButton type="submit" aria-label="Add task" />
    </FormContainer>
  );
};
