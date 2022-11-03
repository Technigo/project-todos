import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const CompleteContainer = styled.div`
border: 2px solid red;
`

const TotalCompletedItems = () => {
  const completedTodos = useSelector((
    state
  ) => state.todos.filter((todo) => todo.completed === true));

  return (
    <CompleteContainer>
      <h4 className="mt-3">Completed: {completedTodos.length}</h4>
    </CompleteContainer>
  )
}

export default TotalCompletedItems;