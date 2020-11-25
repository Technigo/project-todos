import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toread } from "../reducers/toread"

import styled from "styled-components";

const AddContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: grey;
  padding: 100px 0;
`

const AddButton = styled.button`
  font-size: 24px;
  justify-content: center;
  border: none;
  border-radius: 25px;
  padding: 15px;
`

export const AddBook = () => {
  const [value, setValue] = useState("")
  const dispatch = useDispatch();

  const onBookAdd = () => {
    dispatch(toread.actions.addBook(value))
  }

  return (
    <AddContainer>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <AddButton onClick={onBookAdd}>Add book</AddButton>
    </AddContainer>
  )
}