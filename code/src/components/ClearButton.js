import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from "../reducers/todos"
import styled from 'styled-components'

const RemoveButton = styled.button`
  padding: 12px;
  margin: 6px; 
  font-size: 20px;
  border: none;
  border-radius: 6px;
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