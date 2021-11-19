import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import todos from "../reducers/todos"

const AllTodoButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

const Button = styled.button`
  background-color: #ffbe00;
  border: none;
  height: 33px;
  border-radius: 5px;
  width: 120px;
  margin: 0 5px;
  cursor: pointer;
  font-family: "Poiret One", cursive;
  font-weight: bold;
  &:hover {
    background-color: #ffc800;
  }
`

const CompleteAll = () => {
  const dispatch = useDispatch()

  return (
    <AllTodoButtons>
      <Button onClick={() => dispatch(todos.actions.completeAllTodos())}>
        Complete All
      </Button>
      <Button onClick={() => dispatch(todos.actions.removeAllTodos())}>
        Remove All
      </Button>
    </AllTodoButtons>
  )
}

export default CompleteAll
