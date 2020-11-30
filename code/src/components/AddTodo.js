import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { todos } from "../reducers/todos";
import { Button } from "lib/Button";

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 320px;
  height: auto;
  margin: 6px 25px;
  padding: 10px;
  border: solid 2px #786253;
  box-shadow: 8px 5px;
  border-radius: 5px;
`;

const TextInput = styled.input`
  width: 290px;
  overflow: auto;
  margin-right: 10px;
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 0 15px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  :valid {
    background-color: #90ee90;
  }
  :invalid {
    background-color: #ffb6c1;
  }
`;

// Receives Id as input
export const AddTodo = () => {
  // State for input from text box
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onTodoAdd = (e) => {
    e.preventDefault();

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
        maxLength="20"
        minLength="1"
        required
      />
      <Button type="submit" onClick={onTodoAdd} disabled={value.length < 1}>
        Add it
      </Button>
    </InputContainer>
  );
};
