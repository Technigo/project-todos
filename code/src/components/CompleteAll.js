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

const CompleteAll = () => {
  const dispatch = useDispatch()

  return (
    <AllTodoButtons>
      <button onClick={() => dispatch(todos.actions.completeAllTodos())}>
        Complete All
      </button>
      <button onClick={() => dispatch(todos.actions.removeAllTodos())}>
        Remove All
      </button>
    </AllTodoButtons>
  )
}

export default CompleteAll
