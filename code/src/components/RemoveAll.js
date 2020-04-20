import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'


export const RemoveAll = () => {
  const dispatch = useDispatch()
  return (
    <ClearAllButton
      onClick={() => {
        dispatch(todos.actions.removeAll())
      }}
    >
      Remove All
    </ClearAllButton>
  )
}

const ClearAllButton = styled.button`
  display: flex;
  justify-content: center;
  height: 35px;
  padding: 8px;
  margin:8px;
  border: none;
  border-radius: 5px; 
  background: #f18666;
  color: #fff;
  font-weight:700;
  text-transform:uppercase;`