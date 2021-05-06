import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import todos from 'reducers/todos'

const ClearButton = styled.button`
  padding: 7px;
  background-color: #114e60;
  color: #f4eee8;
  border: none;
  border-radius: 5px;
  margin: 0 0 5px 5px;

  &:hover {
    background-color: #19718b;
  }
`

const TodoAllDone = () => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(todos.actions.toggleCompleteAll())
  } 
  
  return (
    <ClearButton
      onClick={() => handleOnClick()}
    >
      ALL DONE
    </ClearButton>
  )
}

export default TodoAllDone 