import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from "../reducers/todos"
import styled from 'styled-components'

const RemoveButton = styled.button`
  padding: 12px;
  margin: 12px; 
  width: fit-content;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  background: #c7ecee;
  font-family: 'Work Sans', sans-serif;
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