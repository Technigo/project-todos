import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components/macro'


export const ClearAllButton = () => {
  const dispatch = useDispatch()

  return (
    <ClearAll
      type="button"
      onClick={() => dispatch(todos.actions.removeAll())}
    >Clear All
    </ClearAll>
  )
}

const ClearAll = styled.button`
  text-align: center;
  background: transparent;
  color: #000;
  border: 3px solid #e5e5e5;
  padding: 5px;
  margin: 5px;
  font-weight: 600;
  border-radius: 10px;
  text-transform: uppercase;
  &:hover {
    background: white;
    cursor: pointer;
  }
`