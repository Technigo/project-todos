import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toread } from "../reducers/toread";

const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  background: #3c4a6b;
`;

const Input = styled.input`
  width: 75%;
  margin-bottom: 20px;
  padding: 10px 0;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;
  font-size: 20px;
  color: #fdfff3;
  text-align: center;
  background: #3c4a6b;
  border: none;
  border-bottom: 6px solid #2a344a;

  &:focus {
    outline: 2px solid #2a344a;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    width: 40%;
  }
`;

const AddButton = styled.button`
  justify-content: center;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;
  font-size: 18px;
  color: #2a344a;
  background: #fdfff3;
  border: none;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;

  &:disabled {
    background: transparent;
    border: 1px solid #2a344a;
    opacity: 0.4;
    cursor: auto;
  }

  &:hover {
    background: #3c4a6b;
    border: 1px solid #2a344a;
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
      <AddButton
        onClick={onBookAdd}
        disabled={value.length === 0 ? true : false}
      >
        Add book to your list
      </AddButton>
    </AddContainer>
  );
};
