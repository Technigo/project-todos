import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button``;

export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onItemAdd = () => {
    dispatch(todos.actions.addItem(value));
  };

  return (
    <TextContainer>
      <TextInput
        placeholder="Add todo here...✏️"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={onItemAdd} disabled={value == ""}>
        Add todo
      </Button>
    </TextContainer>
  );
};
