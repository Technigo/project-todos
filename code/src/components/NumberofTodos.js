import React from 'react'
import { useSelector } from  'react-redux'

import styled from 'styled-components'

const NumberofTodos = ({completed}) => {
  const todos = useSelector((store) =>store.todos.items.length)
  
  return (
    <NumberTodoContainer>
      <p>
        You have completed {completed} of {todos} tasks.
      </p>
    </NumberTodoContainer>
  )
}
export default NumberofTodos

const NumberTodoContainer = styled.div`
color: #ffffff;
`
