import React from "react"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"
import styled from "styled-components"

const RemoveButton = styled.button`
  padding: 12px;
  margin: 24px 12px; 
  width: fit-content;
  font-size: 18px;
  border: 1px solid #535c68;
  border-radius: 6px;
  background: #f5f6fa;
  font-family: "Work Sans", sans-serif;
`

export const ClearButton = () => {
  const dispatch = useDispatch()
  return (
    <RemoveButton
      onClick={() => {
        dispatch(todos.actions.removeAll())
      }}
    >
      Remove All
    </RemoveButton>
  )
}