import React from "react"
import { useDispatch } from 'react-redux'

import styled from "styled-components";

import { toread } from "../reducers/toread"

const DeleteButton = styled.button`
  font-size: 24px;
  justify-content: center;
  border: none;
  border-radius: 25px;
`

export const DeleteBooks = (id) => {
  const dispatch = useDispatch();

  const deleteOneBook = id => {
    dispatch(toread.actions.deleteBook(id)) //the value we pass here is the value that's gonna show "payload" in the console.
  }

  return (
      <DeleteButton onClick={() => deleteOneBook(id)}>
        Delete book
      </DeleteButton>
  )
}