import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'

const CompleteContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center; 
`

const TotalCompletedItems = () => {
  const completedTodos = useSelector((
    state
  ) => state.todos.filter((todo) => todo.completed === true));

  return (
    <CompleteContainer>
      <h4>Completed: {completedTodos.length}</h4>
    </CompleteContainer>
  )
}

export default TotalCompletedItems;