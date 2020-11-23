import React from "react"
import styled from "styled-components";
import { toread } from "../reducers/toread"
import { useDispatch } from 'react-redux'

const DeleteButton = styled.button`
  font-size: 24px;
  justify-content: center;
  border: none;
  border-radius: 25px;
`

export const DeleteBooks = () => {
  const dispatch = useDispatch();

  return (
      <DeleteButton onClick={() => dispatch(toread.actions.deleteOne()
      )}>
        Delete books
      </DeleteButton>
  )
}