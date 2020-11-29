import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { todos } from "../reducers/todos";
import { InputContainer } from "lib/InputContainer";
import { Button } from "lib/Button";

const TextInput = styled.input`
  width: 290px;
  overflow: auto;
  margin-right: 15px;
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 3px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

// Receives Id as input
export const AddTodo = () => {
  // State for input from text box
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onTodoAdd = (event) => {
    event.preventDefault();

    dispatch(todos.actions.addItem(value));

    // this clears the text fields after save
    setValue("");
  };

  return (
    <InputContainer>
      <TextInput
        type="text"
        placeholder="Write your happy todo....."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" onClick={onTodoAdd}>
        Add it
      </Button>
    </InputContainer>
  );
};
