import React from 'react'
import { useDispatch } from 'react-redux'
import todos from '../reducers/todos'
import styled from 'styled-components'

const Button = styled.b`
  width: 100%;
  display: flex;
  align-content: center;
  background-color: mintcream;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
`
const ClearAll = () => {
  const dispatch = useDispatch()

  //calling clearAllTodo with dispatch
  const clearAllTodo = () => {
    dispatch(todos.actions.clearAllTodo()) 
    localStorage.clear()
  }

  return (
    <div>
      <Button onClick={clearAllTodo}>
        Clear All
      </Button>
    </div>
  )
}
export default ClearAll

