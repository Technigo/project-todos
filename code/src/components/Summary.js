import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Summary = () => {
  const list = useSelector((store) => store.todos.items)

  // counts the number of tasks that is done (isDone: true)
  const numDone = list.filter((item) => item.isDone).length

  return (
    <div>
      <StyledP>Completed: <span>{numDone}/{list.length}</span></StyledP>
    </div>
  )
}

export default Summary

const StyledP = styled.p`
  font-size: 16px;
  color: #a6a6a6;

  @media (min-width: 1024px) { 
    font-size: 18px; 
  }
`;
