import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const InputContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 75%;
  background-color: #8fbfd7;
  border: 1px solid #337b9e;
  border-radius: 20px;
`;

const AddButton = styled.button`
  height: 25px;
  width: 50px;
  background-color: #3b8cb4;
  border: 1px solid #337b9e;
  border-radius: 20px;
`;

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
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <AddButton onClick={() => onAddTodo(input)}>
        <span className="add-emoji" role="img" aria-label="add-emoji">
          ➕
        </span>
      </AddButton>
    </InputContainer>
  );
};

export default AddTodo;
