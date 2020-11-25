import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toread } from "../reducers/toread";

import styled from "styled-components";

const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 100px 0;
`;

const Input = styled.input`
border: none;
border-bottom: 6px solid #2A3330;
background: white;
font-size: 24px;
width: 75%;
margin-bottom: 20px;
padding-bottom: 5px;
text-align: center;
`

const AddButton = styled.button`
  font-size: 18px;
  justify-content: center;
  border: none;
  border-radius: 25px;
  padding: 10px;
`;

export const AddBook = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onBookAdd = () => {
    dispatch(toread.actions.addBook(value));
  };

  return (
    <AddContainer>
      <Input
        type="text"
        placeholder="What will you read?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <AddButton onClick={onBookAdd}>Add book</AddButton>
    </AddContainer>
  );
};
