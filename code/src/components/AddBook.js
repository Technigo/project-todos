import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toread } from "../reducers/toread";

const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4d5e58;
  padding: 100px 0;
`;

const Input = styled.input`
  border: none;
  border-bottom: 6px solid #2a3330;
  background: #4d5e58;
  font-size: 20px;
  width: 75%;
  margin-bottom: 20px;
  padding: 10px 0;
  text-align: center;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;

  &:focus {
    outline: 1px solid #2a3330;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    width: 40%;
  }
`;

const AddButton = styled.button`
  font-size: 18px;
  color: #2a3330;
  justify-content: center;
  border: none;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;

  &:hover {
    background-color: #4d5e58;
    border: 1px solid #2a3330;
  }
`;

export const AddBook = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onBookAdd = () => {
    dispatch(toread.actions.addBook(value));
    setValue("");
  };

  return (
    <AddContainer>
      <Input
        type="text"
        placeholder="What do you want to read?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <AddButton onClick={onBookAdd}>Add book to your list</AddButton>
    </AddContainer>
  );
};
