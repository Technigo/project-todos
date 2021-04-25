import React from 'react'
import {useDispatch } from 'react-redux'

import styled from 'styled-components'

import todos from '../reducers/todos'

const Button = styled.button `
  background: pink;
  border-radius: 8px;
  color: black; 
  padding: 8px;
  margin: 10px; 
`
const ClearAllTodos = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(todos.actions.clearAllTodos())}>
       All completed 
      </Button>
    </div>
  )
}

export default ClearAllTodos