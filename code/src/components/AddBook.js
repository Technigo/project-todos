import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toread } from "../reducers/toread";

const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3C4A6B;
  padding: 100px 0;
`;

const Input = styled.input`
  border: none;
  border-bottom: 6px solid #2A344A;
  background: #3C4A6B;
  font-size: 20px;
  width: 75%;
  margin-bottom: 20px;
  padding: 10px 0;
  text-align: center;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;
  color: #FDFFF3;

  &:focus {
    outline: 2px solid #2A344A;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    width: 40%;
  }
`;

const AddButton = styled.button`
  font-size: 18px;
  color: #2A344A;
  justify-content: center;
  border: none;
  border-radius: 25px;
  background: #FDFFF3;
  padding: 10px;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif, "Courier New", monospace;

  &:hover {
    background-color: #3C4A6B;
    border: 1px solid #2A344A;
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
