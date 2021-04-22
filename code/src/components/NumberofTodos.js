import React from 'react'
import { useSelector } from  'react-redux'

import styled from 'styled-components'

const NumberofTodos = () => {
  const todos = useSelector((store) =>store.todos.items.length)

  return (
    <NumberTodoContainer>
      <p>
        You have {todos} tasks in your list
      </p>
    </NumberTodoContainer>
  )
}
export default NumberofTodos

const NumberTodoContainer = styled.div`
color: #ffffff;
`
